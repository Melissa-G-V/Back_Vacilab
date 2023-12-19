import { Usuario } from "../entity/Usuario"

interface IPedido{
    id?: number
    atendido?: boolean
    aprovado?: boolean
    usuario?: Usuario
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?:Date;

}

export default IPedido