import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private loggedIn = false;

	constructor() {}

	isLoggedIn(): boolean {
		return this.loggedIn;
	}

	login(): void {
		this.loggedIn = true;
	}

	logout(): void {
		this.loggedIn = false;
		localStorage.removeItem("Token");
		localStorage.removeItem("User");
		localStorage.removeItem("Menu");
	}
}
