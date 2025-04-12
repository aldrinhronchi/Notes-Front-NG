import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Usuario } from "../../Models/Usuario/Usuario";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { UsuarioAPIService } from "../../Shared/Controllers/UsuarioAPI.service";

@Component({
	selector: "app-profile-info",
	standalone: false,
	templateUrl: "./profile-info.component.html",
	styleUrl: "./profile-info.component.css",
})
export class ProfileInfoComponent {
	constructor(
		private router: Router,
		private modalService: NgbModal,
		private UsuarioAPIService: UsuarioAPIService,
	) {}
	public AvatarColor: string =
		"#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

	usuario?: Usuario;
	InForm: boolean = false;
	ModalUsuarios?: NgbModalRef;

	ngOnInit() {
		let usu = localStorage.getItem("User");

		if (usu != null) {
			this.usuario = JSON.parse(usu);
		}
	}

	getInitials(name?: string): string {
		return name
			? name
					.split(" ")
					.map(n => n[0])
					.join("")
					.toUpperCase()
			: "";
	}

	updateUser(content: any) {
		this.InForm = true;
		this.usuario!.Senha = "";
		this.OpenModalUsuarios(content);
	}

	deleteUser() {
		let item = this.usuario!;
		Swal.fire({
			icon: "warning",
			title: "Tem certeza que quer excluir seu usuario?",
			showDenyButton: true,
			confirmButtonText: "Excluir",
			denyButtonText: `Não excluir`,
		}).then(result => {
			if (result.value) {
				this.UsuarioAPIService.DeleteUsuario(item.ID).subscribe(data => {
					if (data) {
						Swal.fire(
							"Excluido!",
							`O usuário <i>${item.Nome}</i> foi excluido da base`,
							"success",
						).then(x => {
							this.logout();
						});
					} else {
						Swal.fire(
							"Houve um erro",
							`O usuário <i>${item.Nome}</i> NÃO foi excluido da base`,
							"error",
						);
					}
				});
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				Swal.fire("Cancelado", ":)", "error");
			}
		});
	}

	logout() {
		this.router.navigate(["/login"]);
	}
	//#region Modal
	OpenModalUsuarios = (content: any) => {
		this.ModalUsuarios = this.modalService.open(content, { size: "lg" });
	};
	CloseModalUsuarios = () => {
		if (this.ModalUsuarios != null && this.ModalUsuarios != undefined) {
			this.ModalUsuarios.close("");
			this.InForm = false;
		}
	};
	//#endregion
}
