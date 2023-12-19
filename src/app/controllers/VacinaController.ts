import { Request,Response,Router } from "express";
import { Vacina } from "../entity/Vacina";
import VacinaRepository from '../repositories/VacinaRepository'
import IVacina from "../interface/IVacina";

const VacinaRouter = Router();

VacinaRouter.get('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const animais = await VacinaRepository.getVacina()
    return res.status(200).json(animais)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
})


VacinaRouter.get('/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const Vacina = await VacinaRepository.getWhereVacinas(id);
        return res.status(200).json(Vacina);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

VacinaRouter.post('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const newVacina: IVacina = req.body;
    const Vacinas  =  await  VacinaRepository.createVacina(newVacina)
    return res.status(200).json(Vacinas)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});


// VacinaRouter.patch('/update/:id', async (req:Request, res:Response): Promise<Response> => {
//     try{
//         const id = parseInt(req.params.id);
//         const newVacina: IVacina = req.body;
//         const Vacina = await VacinaRepository.updateVacina(id, newVacina);
//         return res.status(200).json(Vacina);
//     } catch(error){
//         console.error(error);
//         return res.status(500).json({ error: error.message });
//     }
// });


VacinaRouter.delete('/delete/vacina/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await VacinaRepository.deleteVacina(id);
    res.sendStatus(204);
});


VacinaRouter.post('/restore/vacina/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await VacinaRepository.restoreVacina(id);
    res.sendStatus(200);
});



export default VacinaRouter;