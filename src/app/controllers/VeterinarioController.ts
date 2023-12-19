import { Request,Response,Router } from "express";
import { Veterinario } from "../entity/Veterinario";
import VeterinarioRepository from '../repositories/VeterinarioRepository'
import IVeterinario from "../interface/IVeterinario";

const VeterinarioRouter = Router();

VeterinarioRouter.get('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const animais = await VeterinarioRepository.getVeterinario()
    return res.status(200).json(animais)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
})


VeterinarioRouter.get('/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const Veterinario = await VeterinarioRepository.getWhereVeterinarios(id);
        return res.status(200).json(Veterinario);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

VeterinarioRouter.post('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const newVeterinario: IVeterinario = req.body;
    const Veterinarios  =  await  VeterinarioRepository.createVeterinario(newVeterinario)
    return res.status(200).json(Veterinarios)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});


VeterinarioRouter.patch('/senha/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const newVeterinario: IVeterinario = req.body;
        const Veterinario = await VeterinarioRepository.updateSenhaVeterinario(id, newVeterinario);
        return res.status(200).json(Veterinario);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

VeterinarioRouter.patch('/update/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const newVeterinario: IVeterinario = req.body;
        const Veterinario = await VeterinarioRepository.updateVeterinario(id, newVeterinario);
        return res.status(200).json(Veterinario);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

VeterinarioRouter.delete('/delete/veterinario/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await VeterinarioRepository.deleteVeterinario(id);
    res.sendStatus(204);
});


VeterinarioRouter.post('/restore/veterinario/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await VeterinarioRepository.restoreVeterinario(id);
    res.sendStatus(200);
});

// VeterinarioRouter.patch('/delete/:id', async (req:Request, res:Response): Promise<Response> => {
//     try{
//         const id = parseInt(req.params.id);
//         const newVeterinario: IVeterinario = req.body;
//         const Veterinario = await VeterinarioRepository.deleteVeterinario(id, newVeterinario);
//         return res.status(200).json(Veterinario);
        
//     } catch(error){
//         console.error(error);
//         return res.status(500).json({ error: error.message });
//     }
// });

export default VeterinarioRouter;