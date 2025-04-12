import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { NgbModalRef, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Tarefa } from "../../Models/Tarefa/Tarefa";
import { TarefaAPIService } from "../../Shared/Controllers/TarefaAPI.service";
import { RequisicaoViewModel } from "../../Models/Views/RequesicaoViewModel";
import Swal from "sweetalert2";

@Component({
	selector: "app-dash-board",
	standalone: false,
	templateUrl: "./dash-board.component.html",
	styleUrl: "./dash-board.component.css",
})
export class DashBoardComponent implements OnInit {
	Tarefa?: Tarefa;
	Tarefas: Tarefa[] = [];
	isSearch = false;
	ModalTarefa?: NgbModalRef;
	InForm: boolean = false;

	@ViewChild("modalContent", { static: true }) modalContent!: TemplateRef<any>;

	constructor(private modalService: NgbModal, private TarefaAPIService: TarefaAPIService) {}

	ngOnInit(): void {
		this.GetListTarefas();
	}

	//#region CRUD Tarefas
	GetListTarefas = () => {
		this.TarefaAPIService.GetTarefas(0, 0).subscribe({
			next: (res: RequisicaoViewModel<Tarefa>) => {
				this.Tarefas = res.Data.filter(x => x.Ativo);
			},
		});
	};
	AddTarefa = (content: any) => {
		this.Tarefa = {
			ID: 0,
			Titulo: "",
			Conteudo: "",
			IDUsuario: 0,
			Fixado: false,
			Concluido: false,
			Ativo: true,
			DataCriado: new Date(),
		};
		this.InForm = true;
		this.OpenModalTarefas(content);
	};

	EditTarefa = (item: Tarefa, content: any) => {
		this.Tarefa = item;
		this.InForm = true;
		this.OpenModalTarefas(content);
	};
	ViewTarefa = (item: Tarefa, content: any) => {
		this.Tarefa = item;
		this.InForm = true;
		this.OpenModalTarefas(content);
	};
	PinTarefa = (item: Tarefa) => {
		item.Fixado = !item.Fixado;
		item.DataAlterado = new Date();
		this.TarefaAPIService.SaveTarefa(item).subscribe(res => {
			Swal.fire("Atualizado!", `A Tarefa <i>${item.Titulo}</i> foi atualizado na base`, "success");
			this.GetListTarefas();
		});
	};
	DeleteTarefa = (item: Tarefa) => {
		Swal.fire({
			title: `Certeza que quer excluir a Tarefa <i>${item.Titulo}</i>`,
			text: "Está é uma ação destrutiva, sem forma de recuperar!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Excluir",
			cancelButtonText: "Cancelar",
		}).then(result => {
			if (result.value) {
				this.TarefaAPIService.DeleteTarefa(item.ID).subscribe(data => {
					this.GetListTarefas();

					if (data) {
						Swal.fire(
							"Excluido!",
							`A Tarefa <i>${item.Titulo}</i> foi excluida da base`,
							"success",
						);
					} else {
						Swal.fire(
							"Houve um erro",
							`A Tarefa <i>${item.Titulo}</i> NÃO foi excluida da base`,
							"error",
						);
					}
				});
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				Swal.fire("Cancelado", ":)", "error");
				this.GetListTarefas();
			}
		});
	};
	//#endregion
	//#region Modal
	OpenModalTarefas = (content: any) => {
		this.ModalTarefa = this.modalService.open(content, { size: "lg" });
	};
	CloseModalTarefas = () => {
		if (this.ModalTarefa != null && this.ModalTarefa != undefined) {
			this.ModalTarefa.close("");
			this.InForm = false;
		}
	};
	//#endregion
}
