import { Vacina } from "../entity/Vacina";
import IVacina from "../interface/IVacina";
import { AppDataSource } from "../../database/data-source";

const vacinaRepository = AppDataSource.getRepository(Vacina)

const getVacina = ():Promise<IVacina[]> => {
    return vacinaRepository.find();
}


const getWhereVacinas = async (id: number): Promise<IVacina> => {
    let Vacina = await vacinaRepository.findOne({
        
        where: { id } 
    });
    if (!Vacina) {
        throw new Error('Vacina não encontrado');
    }
    return Vacina;
}

const createVacina = (Vacina: IVacina): Promise<IVacina> => {
    return vacinaRepository.save(Vacina);
}

// const updateVacina = async (id: number, newVacina: IVacina): Promise<IVacina> => {
//     let Vacina = await vacinaRepository.findOne({ where: { id } });
//     if (!Vacina) {
//         throw new Error('Vacina não encontrado');
//     }
//     Vacina.bg_img = newVacina.bg_img || Vacina.bg_img;
//     return await vacinaRepository.save(Vacina);
// }

const deleteVacina = async (id: number): Promise<void> => {
    await vacinaRepository.softDelete(id);
}

const restoreVacina = async (id: number): Promise<void> => {
    await vacinaRepository.restore(id);
}

// const deleteVacina = async (id: number, newVacina: IVacina): Promise<IVacina> => {
//     let Vacina = await vacinaRepository.findOne({ where: { id } });
//     if (!Vacina) {
//         throw new Error('Vacina não encontrado');
//     }
//     Vacina.deleted = !Vacina.deleted
//     return await vacinaRepository.save(Vacina);
// }

export default { getVacina,createVacina,restoreVacina,getWhereVacinas,deleteVacina }