import { Animal } from "../entity/Animal";
import { Vacina } from "../entity/Vacina";
// import { Vacina } from "../entity/Vacina";
interface ICarteira {
    id: number;
    vacina: Vacina;
    animal: Animal;
}

// interface ICarteira{
// id?: number
// codigo?: string;
// bg_img?: string
// deletedAt?:Date;
// createdAt?: Date;
// updatedAt?: Date;
// vacinas: Vacina[]
// }
export default ICarteira
