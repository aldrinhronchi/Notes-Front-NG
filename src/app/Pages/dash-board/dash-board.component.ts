import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { Usuario } from "../../Models/Usuario/Usuario";
import { NgbModalRef, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Tarefa } from "../../Models/Tarefa/Tarefa";

@Component({
	selector: "app-dash-board",
	standalone: false,
	templateUrl: "./dash-board.component.html",
	styleUrl: "./dash-board.component.css",
})
export class DashBoardComponent implements OnInit {
	usuario!: Usuario;
	allNotes: Tarefa[] = [];
	isSearch = false;
	modalRef!: NgbModalRef;
	modalConfig = {
		type: "add",
		data: {
			ID: 0,
			IDUsuario: 0,
			Titulo: "",
			Conteudo: "",
			Fixado: false,
			Concluido: false,
			Ativo: true,
			DataCriado: new Date(),
		},
	};
	@ViewChild("modalContent", { static: true }) modalContent!: TemplateRef<any>;

	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {
		this.buscarNotas();
		this.buscarUsuario();
	}

	buscarUsuario() {}

	buscarNotas() {}

	editarNota(nota: Tarefa) {
		this.modalConfig = { type: "edit", data: nota };
		this.abrirModal();
	}

	deletarNota(nota: Tarefa) {}

	fixarNota(nota: Tarefa) {}

	limparPesquisa() {
		this.isSearch = false;
		this.buscarNotas();
	}

	abrirModal() {
		this.modalRef = this.modalService.open(this.modalContent, { size: "lg" });
	}

	fecharModal() {
		if (this.modalRef) this.modalRef.close();
		this.buscarNotas();
	}
}
