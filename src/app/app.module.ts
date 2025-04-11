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
import { NoteCardComponent } from './Components/note-card/note-card.component';
import { ModalNoteComponent } from './Pages/modal-note/modal-note.component';

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
  ModalNoteComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
