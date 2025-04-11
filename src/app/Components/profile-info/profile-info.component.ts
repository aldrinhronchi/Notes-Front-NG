import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Usuario } from "../../Models/Usuario/Usuario";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
	selector: "app-profile-info",
	standalone: false,
	templateUrl: "./profile-info.component.html",
	styleUrl: "./profile-info.component.css",
})
export class ProfileInfoComponent {
	constructor(private router: Router, private modalService: NgbModal) {}
	public AvatarColor: string =
		"#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

	@Input() usuario!: Usuario;
	@Output() abrirModalUsuario = new EventEmitter<void>();
	InForm: boolean = false;
	ModalUsuarios?: NgbModalRef;

	mudarDados() {
		this.abrirModalUsuario.emit();
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
		this.OpenModalUsuarios(content);
		console.log("Chamando endpoint de Update Usuário para:", this.usuario.ID);
	}

	deleteUser() {
		Swal.fire({
			icon: "warning",
			title: "Tem certeza que quer excluir seu usuario?",
			showDenyButton: true,
			confirmButtonText: "Excluir",
			denyButtonText: `Não excluir`,
		}).then(result => {
			if (result.isConfirmed) {
				Swal.fire({ icon: "success", title: "Excluido!", timer: 2000 }).then(result => {
					this.router.navigate(["/login"]);
				});
			} else if (result.isDenied) {
				Swal.fire("Cancelado", ":)", "info");
			}
		});
		console.log("Chamando endpoint de Delete Usuário para:", this.usuario.ID);
	}

	logout() {
		console.log("Logout efetuado! Limpando credenciais...");
		this.router.navigate(["/login"]);
	}
	//#region Modal
	OpenModalUsuarios = (content: any) => {
		this.ModalUsuarios = this.modalService.open(content, { size: "lg" });
	};
	CloseModalUsuarios = () => {
		if (this.ModalUsuarios != null && this.ModalUsuarios != undefined) {
			this.ModalUsuarios.close("");
		}
	};
	//#endregion
}
