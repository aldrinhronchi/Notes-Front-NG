import { Component } from "@angular/core";
import { Usuario } from "../../Models/Usuario/Usuario";

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
		Ativo: false,
		DataCriado: new Date(),
	};
	onSubmit() {
		console.log("Usuário cadastrado:", this.usuario);
	}
}
