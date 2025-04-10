import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Pages/login/login.component";
import { NotFoundComponent } from "./Pages/not-found/not-found.component";

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "404", component: NotFoundComponent, pathMatch: "full" },
	{ path: "**", redirectTo: "404", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
