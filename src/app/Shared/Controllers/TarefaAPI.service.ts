import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environment/environment";
import { Tarefa } from "../../Models/Tarefa/Tarefa";
import { RequisicaoViewModel } from "../../Models/Views/RequesicaoViewModel";

@Injectable({
	providedIn: "root",
})
export class TarefaAPIService {
	public urlAddress: string = environment.urlAddress;

	constructor(private HTTP: HttpClient) {}

	private CreateRoute = (route: string, envAddress: string) => {
		return `${envAddress}/${route}`;
	};
	public GetTarefas = (
		page: number = 1,
		pagesize: number = 10,
		CamposQuery: string = "",
		ValoresQuery: string = "",
		Ordenacao: string = "",
		Ordem: boolean = false,
	) => {
		return this.HTTP.get<RequisicaoViewModel<Tarefa>>(
			this.CreateRoute(
				`api/Tarefa/ListarTarefas?Pagina=${page}&RegistroPorPagina=${pagesize}&Campos=${CamposQuery}&Valores=${ValoresQuery}&Ordenacao=${Ordenacao}&Ordem=${Ordem}`,
				this.urlAddress,
			),
		);
	};

	public SaveTarefa = (Tarefa: Tarefa) => {
		return this.HTTP.post<boolean>(
			this.CreateRoute("api/Tarefa/SalvarTarefa", this.urlAddress),
			Tarefa,
		);
	};
	public DeleteTarefa = (IDTarefa: number) => {
		return this.HTTP.delete<boolean>(
			this.CreateRoute(`api/Tarefa/ExcluirTarefa/${IDTarefa}`, this.urlAddress),
		);
	};
}
