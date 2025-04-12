import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./Pages/login/login.component";
import { NotFoundComponent } from "./Pages/not-found/not-found.component";
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";
import { ProfileInfoComponent } from "./Components/profile-info/profile-info.component";
import { SignUpComponent } from "./Pages/sign-up/sign-up.component";
import { DashBoardComponent } from "./Pages/dash-board/dash-board.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { ModalUsuarioComponent } from "./Pages/modal-usuario/modal-usuario.component";
import { ModalTarefaComponent } from "./Pages/modal-tarefa/modal-tarefa.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NoteCardComponent } from "./Components/note-card/note-card.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorHandlerService } from "./Shared/Services/Interceptors/error-handler.service";
import { TokenInterceptorService } from "./Shared/Services/Interceptors/token-handler.service";

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		NotFoundComponent,
		NavBarComponent,
		ProfileInfoComponent,
		SignUpComponent,
		DashBoardComponent,
		FooterComponent,

		ModalUsuarioComponent,
		ModalTarefaComponent,
		NoteCardComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule, HttpClientModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorHandlerService,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorService,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
