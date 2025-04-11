import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import Swal from "sweetalert2";
import { Tarefa } from "../../Models/Tarefa/Tarefa";

@Component({
	selector: "app-modal-note",
	standalone: false,
	templateUrl: "./modal-note.component.html",
	styleUrl: "./modal-note.component.css",
})
export class ModalNoteComponent implements OnInit {
	@Input() tipo!: "add" | "edit";
	@Input() noteData!: Tarefa | null;
	@Output() onClose = new EventEmitter<void>();
	@Output() getAllNotes = new EventEmitter<void>();

	nota!: Tarefa;
	tags: string = "";

	ngOnInit(): void {
		this.nota = this.noteData
			? { ...this.noteData }
			: {
					ID: 0,
					Titulo: "",
					Conteudo: "",
					IDUsuario: 0,
					Fixado: false,
					Ativo: true,
					Concluido: false,
					DataCriado: new Date(),
			  };
	}

	salvarNota() {
		if (!this.nota.Titulo) {
			Swal.fire("Erro!", "Por favor, insira o título.", "error");
			return;
		}
		if (!this.nota.Conteudo) {
			Swal.fire("Erro!", "Por favor, insira o conteúdo.", "error");
			return;
		}

		if (this.tipo === "edit") {
			this.editarNota();
		} else {
			this.adicionarNota();
		}
	}

	adicionarNota() {
		Swal.fire("Sucesso!", `A nota <i>${this.nota.Titulo}</i> foi adicionada!`, "success");
		this.getAllNotes.emit();
		this.fecharModal();
	}

	editarNota() {
		Swal.fire("Sucesso!", `A nota <i>${this.nota.Titulo}</i> foi atualizada!`, "success");
		this.getAllNotes.emit();
		this.fecharModal();
	}

	fecharModal() {
		this.onClose.emit();
	}
}
