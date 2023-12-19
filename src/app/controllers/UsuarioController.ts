import { Request,Response,Router } from "express";
import { Usuario } from "../entity/Usuario";
import UsuarioRepository from '../repositories/UsuarioRepository'
import IUsuario from "../interface/IUsuario";

const UsuarioRouter = Router();

UsuarioRouter.get('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const usuarios = await UsuarioRepository.getUsuarios()
    return res.status(200).json(usuarios)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
})

UsuarioRouter.get('/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const usuario = await UsuarioRepository.getWhereUsuarios(id);
        return res.status(200).json(usuario);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

UsuarioRouter.post('/login', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, senha } = req.body;
        const usuario = await UsuarioRepository.AutentificarUsuario(email, senha);
        if (!usuario) {
            return res.status(400).json({ error: 'Não Autorizado' });
        }
 
        // User authenticated successfully, create a token or session here
        return res.status(200).json({ message: 'Logado' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
 });
 
UsuarioRouter.post('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const newUsuario: IUsuario = req.body;
    
    const usuarios  =  await  UsuarioRepository.createUsuario(newUsuario)
    return res.status(200).json(usuarios)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});


UsuarioRouter.patch('/update/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const newUsuario: IUsuario = req.body;
        const usuario = await UsuarioRepository.updateUsuario(id, newUsuario);
        return res.status(200).json(usuario);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

UsuarioRouter.patch('/senha/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const newUsuario: IUsuario = req.body;
        const usuario = await UsuarioRepository.updateSenhaUsuario(id, newUsuario);
        return res.status(200).json(usuario);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});


UsuarioRouter.delete('/del/:id', async (req, res) => {
    try{
    const id = parseInt(req.params.id);
    await UsuarioRepository.deleteUsuario(id);
    return res.status(200).json(id);
} catch(error){
    console.error(error);
    return res.status(500).json({ error: error.message });
}
});


UsuarioRouter.post('/restore/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await UsuarioRepository.restoreUsuario(id);
    res.sendStatus(200);
});






export default UsuarioRouter;