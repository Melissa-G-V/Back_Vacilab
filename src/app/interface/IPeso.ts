import { ObjectId } from "typeorm";

interface IPeso{
id?: ObjectId
peso?: number;
medida?: string;
deletedAt?:Date;
createdAt?: Date;
updatedAt?: Date;
//vacinas: Vacina[]
}
export default IPeso
