import { Component } from "@angular/core";
import { Usuario } from "../../Models/Usuario/Usuario";

@Component({
	selector: "app-nav-bar",
	standalone: false,
	templateUrl: "./nav-bar.component.html",
	styleUrl: "./nav-bar.component.css",
})
export class NavBarComponent {
	usuario: Usuario = {
		ID: 1,
		Nome: "Aldrin Tech",
		Login: "aldrin123",
		Senha: "",
		Email: "aldrin@email.com",
		Ativo: true,
		DataCriado: new Date(),
		Token: "abc123",
	};
}
