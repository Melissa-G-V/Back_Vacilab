import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import { Usuario } from "../entity/Usuario";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const id = res.locals.jwtPayload.usuarioId;

    const usuarioRepository = getRepository(Usuario);
    let usuario: Usuario;
    try {
      usuario = await usuarioRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    if (roles.indexOf(usuario.definicao) > -1) next();
    else res.status(401).send();
  };
};