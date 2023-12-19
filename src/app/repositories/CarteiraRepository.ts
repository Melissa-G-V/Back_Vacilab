import { Carteira_Animal_Vacinas } from "../entity/Carteira";
import { Animal } from "../entity/Animal";
import { Vacina } from "../entity/Vacina";
import ICarteira from "../interface/ICarteira";
import { AppDataSource } from "../../database/data-source";
import { Equal } from 'typeorm';


const carteiraRepository = AppDataSource.getRepository(Carteira_Animal_Vacinas)

const getCarteira = ():Promise<ICarteira[]> => {
    return carteiraRepository.find({
        relations: ['vacina','animal'],
    });
}

const createCarteira = async (animal: Animal, vacina: Vacina): Promise<Carteira_Animal_Vacinas> => {
    const carteira = new Carteira_Animal_Vacinas();
    carteira.animal = animal;
    carteira.vacina = vacina;
    return carteiraRepository.save(carteira);
}

const createCarteira_Animal = (Carteira :Carteira_Animal_Vacinas): Promise<ICarteira> => {
    return carteiraRepository.save(Carteira);
}

const getVacinesByAnimalId = async (animalId: number): Promise<Vacina[]> => {
    const carteiras = await carteiraRepository.find({ relations: ["vacina"], where: { animal: Equal(animalId) } });
    const vacines = carteiras.map(carteira => carteira.vacina);
    return vacines;
}


// const getWhereCarteiras = async (id: number): Promise<ICarteira> => {
//     let Carteira = await carteiraRepository.findOne({
//         relations: ['vacinas'],
//         where: { id } 
//     });
//     if (!Carteira) {
//         throw new Error('Carteira não encontrado');
//     }
//     return Carteira;
// }

// const createCarteira = (Carteira: ICarteira): Promise<ICarteira> => {
//     return carteiraRepository.save(Carteira);
// }

// const updateCarteira = async (id: number, newCarteira: ICarteira): Promise<ICarteira> => {
//     let Carteira = await carteiraRepository.findOne({ where: { id } });
//     if (!Carteira) {
//         throw new Error('Carteira não encontrado');
//     }
//     Carteira.bg_img = newCarteira.bg_img || Carteira.bg_img;
//     return await carteiraRepository.save(Carteira);
// }

// const deleteCarteira = async (id: number): Promise<void> => {
//     await carteiraRepository.softDelete(id);
// }

// const restoreCarteira = async (id: number): Promise<void> => {
//     await carteiraRepository.restore(id);
// }



export default { getCarteira,createCarteira,createCarteira_Animal,getVacinesByAnimalId }

// export default { getCarteira,restoreCarteira,updateCarteira,getWhereCarteiras, createCarteira }