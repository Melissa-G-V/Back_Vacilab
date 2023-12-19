import { Especie } from "../entity/Animal"
import { Carteira_Animal_Vacinas } from "../entity/Carteira"
import { Usuario } from "../entity/Usuario"

interface IAnimal{
    id?: number;
    nome?: string;
    cor?: string;
    raca?: string;
    genero?: string;
    // imagem?: string;
    // peso?: number;
    data_nascimento?: Date;
    compartilhado?: boolean;
    castrado?: boolean;
    microchip?: boolean;
    mortis?: boolean;
    deletedAt?:Date;
    codigo?: string; 
    especie?: Especie;
    createdAt: Date;
    updatedAt: Date;
    usuario: Usuario;
}
export default IAnimal