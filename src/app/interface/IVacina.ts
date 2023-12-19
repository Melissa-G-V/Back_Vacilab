import { CLASSIFICACAO } from "../entity/Vacina"
import { DOSE } from "../entity/Vacina"
import { Carteira_Animal_Vacinas } from "../entity/Carteira"

interface IVacina{
    id?: number
    aplicado?: Date
    expiracao?: Date
    fabricacao?: Date
    fabricante?: string
    classificacao?: CLASSIFICACAO
    dose?: DOSE
    finalidade?: string
    aplicador?: string
    deletedAt?:Date;
    createdAt?: Date;
    updatedAt?: Date;

}
export default IVacina