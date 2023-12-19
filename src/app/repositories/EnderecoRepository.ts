import { Endereco } from "../entity/Endereco";
import IEndereco from "../interface/IEndereco";
import { AppDataSource } from "../../database/data-source";

const EnderecoRepository = AppDataSource.getRepository(Endereco)

const getEndereco = ():Promise<IEndereco[]> => {
    return EnderecoRepository.find();
}

const getWhereEnderecos = async (id: number): Promise<IEndereco> => {
    let Endereco = await EnderecoRepository.findOne({
        where: { id } 
    });
    if (!Endereco) {
        throw new Error('Endereco não encontrado');
    }
    return Endereco;
}

const createEndereco = (Endereco: IEndereco): Promise<IEndereco> => {
    return EnderecoRepository.save(Endereco);
}

const updateEndereco = async (id: number, newEndereco: IEndereco): Promise<IEndereco> => {
    let Endereco = await EnderecoRepository.findOne({ where: { id } });
    if (!Endereco) {
        throw new Error('Endereco não encontrado');
    }

    Endereco.bairo = newEndereco.bairo || Endereco.bairo;
    Endereco.cep = newEndereco.cep || Endereco.cep;
    Endereco.localidade = newEndereco.localidade || Endereco.localidade;
    Endereco.residencia = newEndereco.residencia || Endereco.residencia;
    Endereco.num_casa = newEndereco.num_casa || Endereco.num_casa;
    return await EnderecoRepository.save(Endereco);
}

const deleteEndereco = async (id: number): Promise<void> => {
    await EnderecoRepository.softDelete(id);
}

const restoreEndereco = async (id: number): Promise<void> => {
    await EnderecoRepository.restore(id);
}



// const deleteEndereco = async (id: number, newEndereco: IEndereco): Promise<IEndereco> => {
//     let Endereco = await EnderecoRepository.findOne({ where: { id } });
//     if (!Endereco) {
//         throw new Error('Endereco não encontrado');
//     }
//     Endereco.deleted = !Endereco.deleted
//     return await EnderecoRepository.save(Endereco);
// }


export default { getEndereco,restoreEndereco,deleteEndereco, updateEndereco,getWhereEnderecos,createEndereco, }