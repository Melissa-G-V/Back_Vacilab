import { Router } from "express";
import usuarioRouter from "../controllers/UsuarioController";

const routers = Router()
routers.use('/usuarios',usuarioRouter)

export default routers;