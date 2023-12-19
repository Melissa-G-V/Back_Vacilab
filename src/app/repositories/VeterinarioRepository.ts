import { Veterinario } from "../entity/Veterinario";
import IVeterinario from "../interface/IVeterinario";
import { AppDataSource } from "../../database/data-source";

const veterinarioRepository = AppDataSource.getRepository(Veterinario)

const getVeterinario = ():Promise<IVeterinario[]> => {
    return veterinarioRepository.find();
}


const getWhereVeterinarios = async (id: number): Promise<IVeterinario> => {
    let Veterinario = await veterinarioRepository.findOne({
        relations: [ 'endereco'],

        where: { id } 
    });
    if (!Veterinario) {
        throw new Error('Veterinario não encontrado');
    }
    return Veterinario;
}

const createVeterinario = (Veterinario: IVeterinario): Promise<IVeterinario> => {
    return veterinarioRepository.save(Veterinario);
}

const updateVeterinario = async (id: number, newVeterinario: IVeterinario): Promise<IVeterinario> => {
    let Veterinario = await veterinarioRepository.findOne({ where: { id } });
    if (!Veterinario) {
        throw new Error('Veterinario não encontrado');
    }
    Veterinario.nome = newVeterinario.nome || Veterinario.nome;
    Veterinario.email = newVeterinario.email || Veterinario.email;
    Veterinario.crmv = newVeterinario.crmv|| Veterinario.crmv;
    Veterinario.cnpj = newVeterinario.cnpj || Veterinario.cnpj;
    Veterinario.telefone = newVeterinario.telefone || Veterinario.telefone;
    Veterinario.cpf = newVeterinario.cpf || Veterinario.cpf;

    return await veterinarioRepository.save(Veterinario);
}

const updateSenhaVeterinario = async (id: number, newVeterinario: IVeterinario): Promise<IVeterinario> => {
    let Veterinario = await veterinarioRepository.findOne({ where: { id } });

    if (!Veterinario) {
        throw new Error('Veterinario não encontrado');
    }

    Veterinario.senha = newVeterinario.senha || Veterinario.senha;
    Veterinario.nova_senha = newVeterinario.senha || Veterinario.senha;

    return await veterinarioRepository.save(Veterinario);
}
const deleteVeterinario = async (id: number): Promise<void> => {
    await veterinarioRepository.softDelete(id);
}

const restoreVeterinario = async (id: number): Promise<void> => {
    await veterinarioRepository.restore(id);
}

// const deleteVeterinario = async (id: number, newVeterinario: IVeterinario): Promise<IVeterinario> => {
//     let Veterinario = await veterinarioRepository.findOne({ where: { id } });
//     if (!Veterinario) {
//         throw new Error('Veterinario não encontrado');
//     }
//     Veterinario.deleted = !Veterinario.deleted
//     return await veterinarioRepository.save(Veterinario);
// }


export default { getVeterinario, restoreVeterinario,deleteVeterinario,getWhereVeterinarios,updateVeterinario,updateSenhaVeterinario,createVeterinario }