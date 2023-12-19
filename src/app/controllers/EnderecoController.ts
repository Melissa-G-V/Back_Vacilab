import { Request,Response,Router } from "express";
import { Endereco } from "../entity/Endereco";
import EnderecoRepository from '../repositories/EnderecoRepository'
import IEndereco from "../interface/IEndereco";

const EnderecoRouter = Router();

EnderecoRouter.get('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const animais = await EnderecoRepository.getEndereco()
    return res.status(200).json(animais)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
})


EnderecoRouter.get('/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const Endereco = await EnderecoRepository.getWhereEnderecos(id);
        return res.status(200).json(Endereco);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

EnderecoRouter.post('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const newEndereco: IEndereco = req.body;
    const Enderecos  =  await  EnderecoRepository.createEndereco(newEndereco)
    return res.status(200).json(Enderecos)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});


EnderecoRouter.patch('/update/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const newEndereco: IEndereco = req.body;
        const Endereco = await EnderecoRepository.updateEndereco(id, newEndereco);
        return res.status(200).json(Endereco);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

EnderecoRouter.delete('/delete/endereco/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await EnderecoRepository.deleteEndereco(id);
    res.sendStatus(204);
});


EnderecoRouter.post('/restore/endereco/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await EnderecoRepository.restoreEndereco(id);
    res.sendStatus(200);
});



// EnderecoRouter.patch('/delete/:id', async (req:Request, res:Response): Promise<Response> => {
//     try{
//         const id = parseInt(req.params.id);
//         const newEndereco: IEndereco = req.body;
//         const Endereco = await EnderecoRepository.deleteEndereco(id, newEndereco);
//         return res.status(200).json(Endereco);
        
//     } catch(error){
//         console.error(error);
//         return res.status(500).json({ error: error.message });
//     }
// });

export default EnderecoRouter;