import { Endereco } from '../entity/Endereco';

interface IVeterinario{
    id?: number
    nome?: string
    email?: string
    crmv?: string
    cnpj?: string
    telefone?: string
    cpf?: string
    senha?: string
    nova_senha?: string
    deletedAt?:Date;
    endereco: Endereco
    createdAt: Date;
    updatedAt: Date;
}
export default IVeterinario
