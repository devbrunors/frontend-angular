import { Pessoa } from './pessoas.model';

export interface Resposta {
    data: Array<Pessoa>;
    status: string;
}