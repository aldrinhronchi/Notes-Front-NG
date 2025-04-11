import { Component } from "@angular/core";
import { AuthService } from "../../Shared/Services/auth/auth.service";
import { Router } from "@angular/router";
import { LoginViewModel } from "../../Models/Views/LoginViewModel";

@Component({
	selector: "app-login",
	standalone: false,
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
})
export class LoginComponent {
	constructor(private authService: AuthService, private router: Router) {}
	loginViewModel: LoginViewModel = {
		Login: "",
		Senha: "",
	};

	login() {
		console.log("Tentando login com:", this.loginViewModel);

		this.authService.login();
		this.router.navigate(["/dashboard"]);
	}
}
