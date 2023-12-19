import { Request,Response,Router } from "express";
import { Carteira_Animal_Vacinas } from "../entity/Carteira";
import CarteiraRepository from '../repositories/CarteiraRepository'
import AnimalRepository from "../repositories/AnimalRepository"
import VacinaRepository  from '../repositories/VacinaRepository';
import ICarteira from "../interface/ICarteira";

const CarteiraRouter = Router();

CarteiraRouter.get('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const carteira = await CarteiraRepository.getCarteira()
    return res.status(200).json(carteira)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
})

CarteiraRouter.post('/', async (req:Request, res:Response): Promise<Response> => {
    try {
    const newCarteira: ICarteira = req.body;
    const Carteira  =  await  CarteiraRepository.createCarteira_Animal(newCarteira)
    return res.status(200).json(Carteira)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});


CarteiraRouter.get('/:id', async (req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const Carteira = await CarteiraRepository.getVacinesByAnimalId(id);
        return res.status(200).json(Carteira);
    } catch(error){
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
});

// CarteiraRouter.get('/:id', async (req:Request, res:Response): Promise<Response> => {
//     try{
//         const id = parseInt(req.params.id);
//         const Carteira = await CarteiraRepository.getWhereCarteiras(id);
//         return res.status(200).json(Carteira);
//     } catch(error){
//         console.error(error);
//         return res.status(500).json({ error: error.message });
//     }
// });


// CarteiraRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
//    try {
//        const { animalId, vacinaId } = req.body;
//        const animal = await AnimalRepository.getWhereAnimais(animalId);
//        const vacina = await VacinaRepository.getWhereVacinas(vacinaId);
//        if (!animal || !vacina) {
//            return res.status(404).json({ error: 'Animal or Vacine not found' });
//        }
//        const newCarteira = new Carteira();
//        newCarteira.animal = animal;
//        newCarteira.vacina = vacina;
//        CarteiraRepository.save(newCarteira);
//        return res.status(200).json(savedCarteira);
//    } catch (error) {
//        console.error(error);
//        return res.status(500).json({ error: error.message });
//    }
// });


// CarteiraRouter.patch('/update/:id', async (req:Request, res:Response): Promise<Response> => {
//     try{
//         const id = parseInt(req.params.id);
//         const newCarteira: ICarteira = req.body;
//         const Carteira = await CarteiraRepository.updateCarteira(id, newCarteira);
//         return res.status(200).json(Carteira);
//     } catch(error){
//         console.error(error);
//         return res.status(500).json({ error: error.message });
//     }
// });





// CarteiraRouter.post('/restore/carteira/:id', async (req, res) => {
//     const id = parseInt(req.params.id);
//     await CarteiraRepository.restoreCarteira(id);
//     res.sendStatus(200);
// });


export default CarteiraRouter;