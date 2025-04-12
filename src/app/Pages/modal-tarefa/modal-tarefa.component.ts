import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Tarefa } from "../../Models/Tarefa/Tarefa";
import Swal from "sweetalert2";
import { TarefaAPIService } from "../../Shared/Controllers/TarefaAPI.service";

@Component({
	selector: "app-modal-tarefa",
	standalone: false,
	templateUrl: "./modal-tarefa.component.html",
	styleUrl: "./modal-tarefa.component.css",
})
export class ModalTarefaComponent {
	@Input() tarefa!: Tarefa;
	@Output("CloseModal") CloseModalTarefas: EventEmitter<any> = new EventEmitter();
	@Output("RefreshList") TarefaList: EventEmitter<any> = new EventEmitter();

	constructor(private TarefaAPIService: TarefaAPIService) {}

	//#region Create Update
	AddTarefa = () => {
		let item = this.tarefa;
		item.DataCriado = new Date();
		this.TarefaAPIService.SaveTarefa(item).subscribe(res => {
			Swal.fire("Adicionada!", `A Tarefa foi adicionada a base`, "success");
			this.TarefaList.emit();
			this.CloseModal();
		});
	};
	SaveTarefa = () => {
		let item = this.tarefa;
		item.DataAlterado = new Date();
		this.TarefaAPIService.SaveTarefa(item).subscribe(res => {
			Swal.fire("Atualizada!", `A Tarefa foi atualizada na base`, "success");
			this.TarefaList.emit();
			this.CloseModal();
		});
	};
	//#endregion
	//#region Modal
	CloseModal = () => {
		console.log("kk");
		this.CloseModalTarefas.emit();
	};
	//#endregion
}
