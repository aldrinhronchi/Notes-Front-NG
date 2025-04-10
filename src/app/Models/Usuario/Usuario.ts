export interface Usuario {
	ID: number;
	Nome: string;
	Login?: string;
	Senha?: string;
	Email: string;
	Ativo: boolean;
	DataCriado: Date;
	DataAlterado?: Date;
	UsuarioCriado?: string;
	UsuarioAlterado?: string;
	Token?: string;
}
