import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Tarefa } from "../../Models/Tarefa/Tarefa";

@Component({
	selector: "app-note-card",
	standalone: false,
	templateUrl: "./note-card.component.html",
	styleUrl: "./note-card.component.css",
})
export class NoteCardComponent {
	@Input() tarefa!: Tarefa;
	@Output() onEdit = new EventEmitter<Tarefa>();
	@Output() onDelete = new EventEmitter<Tarefa>();
	@Output() onPinNote = new EventEmitter<Tarefa>();

	editar() {
		this.onEdit.emit(this.tarefa);
	}

	deletar() {
		this.onDelete.emit(this.tarefa);
	}

	fixarNota() {
		this.onPinNote.emit(this.tarefa);
	}
}
