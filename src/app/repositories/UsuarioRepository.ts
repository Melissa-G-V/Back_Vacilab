import { Usuario } from "../entity/Usuario";
import IUsuario from "../interface/IUsuario";
import { AppDataSource } from "../../database/data-source";

const usuarioRepository = AppDataSource.getRepository(Usuario)

const getUsuarios = ():Promise<IUsuario[]> => {
    return usuarioRepository.find();
}

export default { getUsuarios }
