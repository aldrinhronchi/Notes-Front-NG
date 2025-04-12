import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Usuario } from "../../Models/Usuario/Usuario";
import Swal from "sweetalert2";
import { UsuarioAPIService } from "../../Shared/Controllers/UsuarioAPI.service";

@Component({
	selector: "app-modal-usuario",
	standalone: false,
	templateUrl: "./modal-usuario.component.html",
	styleUrl: "./modal-usuario.component.css",
})
export class ModalUsuarioComponent {
	@Output("CloseModal") CloseModalUsuarios: EventEmitter<any> = new EventEmitter();

	@Input() usuario!: Usuario;
	constructor(private UsuarioAPIService: UsuarioAPIService) {}

	SaveUsuario = () => {
		let item = this.usuario;
		item.DataAlterado = new Date();
		this.UsuarioAPIService.SaveUsuario(item).subscribe(res => {
			Swal.fire("Atualizado!", `O usuário <i>${item.Nome}</i> foi atualizado na base`, "success");
			this.CloseModal();
		});
	};
	//#region Modal
	CloseModal = () => {
		this.CloseModalUsuarios.emit();
	};
	//#endregion
}
