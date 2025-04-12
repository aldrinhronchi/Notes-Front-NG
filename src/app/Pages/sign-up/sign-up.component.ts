import { Component } from "@angular/core";
import { Usuario } from "../../Models/Usuario/Usuario";
import Swal from "sweetalert2";
import { UsuarioAPIService } from "../../Shared/Controllers/UsuarioAPI.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-sign-up",
	standalone: false,
	templateUrl: "./sign-up.component.html",
	styleUrl: "./sign-up.component.css",
})
export class SignUpComponent {
	usuario: Usuario = {
		ID: 0,
		Nome: "",
		Login: "",
		Senha: "",
		Email: "",
		Ativo: true,
		DataCriado: new Date(),
	};
	constructor(private UsuarioAPIService: UsuarioAPIService, private router: Router) {}

	SaveUsuario = () => {
		let item = this.usuario;
		item.DataAlterado = new Date();
		this.UsuarioAPIService.SaveUsuario(item).subscribe(res => {
			Swal.fire(
				"Cadastrado!",
				`O usuário <i>${item.Nome}</i> foi cadastrado na base`,
				"success",
			).then(x => this.router.navigate(["/login"]));
		});
	};
}
