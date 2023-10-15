import { Request,Response,Router } from "express";
import { Usuario } from "../entity/Usuario";
import UsuarioRepository from '../repositories/UsuarioRepository'
import IUsuario from "../interface/IUsuario";

const usuarioRouter = Router();

usuarioRouter.get('/', async (req:Request, res:Response): Promise<Response> => {
    const usuarios = await UsuarioRepository.getUsuarios()
    return res.status(200).json(usuarios)
})

export default usuarioRouter;