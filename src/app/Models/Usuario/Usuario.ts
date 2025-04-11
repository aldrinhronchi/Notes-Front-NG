export interface Usuario {
	ID: number;
	Nome: string;
	Login?: string;
	Senha?: string;
	Email: string;
	Ativo: boolean;
	DataCriado: Date;
	DataAlterado?: Date;
	Token?: string;
}
