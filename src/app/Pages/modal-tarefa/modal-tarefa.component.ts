import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Tarefa } from "../../Models/Tarefa/Tarefa";

@Component({
	selector: "app-modal-tarefa",
	standalone: false,
	templateUrl: "./modal-tarefa.component.html",
	styleUrl: "./modal-tarefa.component.css",
})
export class ModalTarefaComponent {
	@Input() tarefa!: Tarefa;
	@Output() confirmado = new EventEmitter<Tarefa>();

	salvarTarefa() {
		this.confirmado.emit(this.tarefa);
	}
}
