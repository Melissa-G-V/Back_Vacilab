import { Router } from "express";
import usuarioRouter from "../controllers/UsuarioController";
import animalRouter from "../controllers/AnimalController";
import CarteiraRouter from "../controllers/CarteiraController";
import VeterinarioRouter from "../controllers/VeterinarioController";
import VacinaRouter from "../controllers/VacinaController";
import EnderecoRouter from "../controllers/EnderecoController";
import { authenticateJwt } from "../middleware/authentification";
import { loginHandler } from "../controllers/AuthController";
import { AuthAdminJwt } from "../middleware/adminauth";
const routers = Router()
routers.use('/usuarios',usuarioRouter)

routers.use('/animais',animalRouter)

routers.use('/carteira', CarteiraRouter)

routers.use('/veterinarios', VeterinarioRouter)

routers.use('/vacinas', VacinaRouter)

routers.use('/enderecos',EnderecoRouter )
routers.post('/login', loginHandler);
// routers.use('/pedidos', PedidosRouter)
routers.get('/protected', authenticateJwt, (req, res) => {
    res.send(`Hello`);
   });
   
   routers.get('/admin', AuthAdminJwt, (req, res) => {
    res.send(`Hello admininstrator`);
   });
export default routers;