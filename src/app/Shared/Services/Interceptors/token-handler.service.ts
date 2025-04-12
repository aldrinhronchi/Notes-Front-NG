import {
	HttpEvent,
	HttpHandler,
	HttpHeaders,
	HttpInterceptor,
	HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "../../environment/environment";

@Injectable({
	providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
	constructor(private router: Router) {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = localStorage.getItem("Token");
		const isApiUrl = request.url.startsWith(environment.urlAddress);
		if (token != null && isApiUrl) {
			request = request.clone({
				setHeaders: { Authorization: `Bearer ${token}` },
			});
		}
		return next.handle(request);
	}
}
