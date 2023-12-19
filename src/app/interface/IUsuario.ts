import { Roles } from '../entity/Usuario';
import { Animal } from '../entity/Animal';
import { Endereco } from '../entity/Endereco';

interface IUsuario{
    id?: number,
    nome?: string,
    email?:string,
    telefone?:string,
    cpf?:string,
    senha?:string,
    // nova_senha?:string,
    definicao?: Roles,
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?:Date;
    animais?: Animal[];
    endereço?: Endereco[];

}
export default IUsuario
