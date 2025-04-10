export interface Usuario {
	ID: number;
	Titulo: string;
	Conteudo: string;
	IDUsuario: number;
	Fixado: boolean;
	Concluido: boolean;
	Ativo: boolean;
	DataCriado: Date;
	DataAlterado?: Date;
	Token?: string;
}
