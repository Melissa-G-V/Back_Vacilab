import { Request,Response,Router } from "express";
import { Animal } from "../entity/Animal";
import AnimalRepository from '../repositories/AnimalRepository'
import IAnimal from "../interface/IAnimal";

const AnimalRouter = Router();

AnimalRouter.get('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const animais = await AnimalRepository.getAnimais()
    return res.status(200).json(animais)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
})


AnimalRouter.get('/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const Animal = await AnimalRepository.getWhereAnimais(id);
        return res.status(200).json(Animal);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

AnimalRouter.post('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const newAnimal: IAnimal = req.body;
    const Animals  =  await  AnimalRepository.createAnimais(newAnimal)
    return res.status(200).json(Animals)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});


AnimalRouter.patch('/update/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const newAnimal: IAnimal = req.body;
        const Animal = await AnimalRepository.updateAnimais(id, newAnimal);
        return res.status(200).json(Animal);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

AnimalRouter.patch('/mortis/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const newAnimal: IAnimal = req.body;
        const Animal = await AnimalRepository.mortisAnimais(id, newAnimal);
        return res.status(200).json(Animal);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

AnimalRouter.patch('/micro/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const newAnimal: IAnimal = req.body;
        const Animal = await AnimalRepository.chipadoAnimal(id, newAnimal);
        return res.status(200).json(Animal);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

// AnimalRouter.patch('/delete/:id', async (req:Request, res:Response): Promise<Response> => {
//     try{
//         const id = parseInt(req.params.id);
//         const newAnimal: IAnimal = req.body;
//         const Animal = await AnimalRepository.deleteAnimais(id, newAnimal);
//         return res.status(200).json(Animal);
        
//     } catch(error){
//         console.error(error);
//         return res.status(500).json({ error: error.message });
//     }
// });



AnimalRouter.delete('/delete/animal/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await AnimalRepository.deleteAnimais(id);
    res.sendStatus(204);
});

AnimalRouter.post('/restore/animal/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await AnimalRepository.restoreAnimais(id);
    res.sendStatus(200);
});

export default AnimalRouter;