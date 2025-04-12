import { Component } from "@angular/core";
import { AuthService } from "../../Shared/Services/auth/auth.service";
import { Router } from "@angular/router";
import { LoginViewModel } from "../../Models/Views/LoginViewModel";
import { UsuarioAPIService } from "../../Shared/Controllers/UsuarioAPI.service";
import { Usuario } from "../../Models/Usuario/Usuario";
import { RequisicaoViewModel } from "../../Models/Views/RequesicaoViewModel";

@Component({
	selector: "app-login",
	standalone: false,
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
})
export class LoginComponent {
	constructor(
		private authService: AuthService,
		private router: Router,
		private usuarioAPIService: UsuarioAPIService,
	) {}
	loginViewModel: LoginViewModel = {
		Login: "",
		Senha: "",
	};

	login() {
		this.usuarioAPIService.LoginUser("api/Usuario/Autenticar", this.loginViewModel).subscribe({
			next: (res: RequisicaoViewModel<Usuario>) => {
				localStorage.setItem("Token", res.Data[0].Token ?? "");
				localStorage.setItem("User", JSON.stringify(res.Data[0]));
				this.authService.login();
				this.router.navigate(["/dashboard"]);
			},
		});
	}
}
