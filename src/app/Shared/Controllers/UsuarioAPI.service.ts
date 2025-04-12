import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environment/environment";
import { Usuario } from "../../Models/Usuario/Usuario";
import { RequisicaoViewModel } from "../../Models/Views/RequesicaoViewModel";
import { LoginViewModel } from "../../Models/Views/LoginViewModel";

@Injectable({
	providedIn: "root",
})
export class UsuarioAPIService {
	public urlAddress: string = environment.urlAddress;

	constructor(private HTTP: HttpClient) {}

	private CreateRoute = (route: string, envAddress: string) => {
		return `${envAddress}/${route}`;
	};
	public GetUsuarios = (
		page: number = 1,
		pagesize: number = 10,
		CamposQuery: string = "",
		ValoresQuery: string = "",
		Ordenacao: string = "",
		Ordem: boolean = false,
	) => {
		return this.HTTP.get<RequisicaoViewModel<Usuario>>(
			this.CreateRoute(
				`api/Usuario/ListarUsuarios?Pagina=${page}&RegistroPorPagina=${pagesize}&Campos=${CamposQuery}&Valores=${ValoresQuery}&Ordenacao=${Ordenacao}&Ordem=${Ordem}`,
				this.urlAddress,
			),
		);
	};
	public LoginUser = (route: string, body: LoginViewModel) => {
		return this.HTTP.post<RequisicaoViewModel<Usuario>>(
			this.CreateRoute(route, this.urlAddress),
			body,
		);
	};
	public SaveUsuario = (usuario: Usuario) => {
		return this.HTTP.post<boolean>(
			this.CreateRoute("api/Usuario/SalvarUsuario", this.urlAddress),
			usuario,
		);
	};
	public DeleteUsuario = (IDUsuario: number) => {
		return this.HTTP.delete<boolean>(
			this.CreateRoute(`api/Usuario/ExcluirUsuario/${IDUsuario}`, this.urlAddress),
		);
	};
}
