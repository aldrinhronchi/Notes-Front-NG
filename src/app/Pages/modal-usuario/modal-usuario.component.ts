import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Usuario } from "../../Models/Usuario/Usuario";
import Swal from "sweetalert2";

@Component({
	selector: "app-modal-usuario",
	standalone: false,
	templateUrl: "./modal-usuario.component.html",
	styleUrl: "./modal-usuario.component.css",
})
export class ModalUsuarioComponent {
	@Output("CloseModal") CloseModalUsuarios: EventEmitter<any> = new EventEmitter();

	@Input() usuario!: Usuario;

	SaveUsuario = () => {
		Swal.fire(
			"Atualizado!",
			`O usuário <i>${this.usuario?.Nome}</i> foi atualizado na base`,
			"success",
		);

		this.CloseModal();
	};
	//#region Modal
	CloseModal = () => {
		this.CloseModalUsuarios.emit();
	};
	//#endregion
}
