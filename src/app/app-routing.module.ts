import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Pages/login/login.component";
import { NotFoundComponent } from "./Pages/not-found/not-found.component";
import { AuthGuard } from "./Shared/Services/auth/auth.guard";
import { DashBoardComponent } from "./Pages/dash-board/dash-board.component";
import { SignUpComponent } from "./Pages/sign-up/sign-up.component";

const routes: Routes = [
	{ path: "", redirectTo: "/login", pathMatch: "full" },
	{ path: "login", component: LoginComponent },
	{ path: "signup", component: SignUpComponent },
	{ path: "dashboard", component: DashBoardComponent, canActivate: [AuthGuard] },
	{ path: "404", component: NotFoundComponent, pathMatch: "full" },
	{ path: "**", redirectTo: "404", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
