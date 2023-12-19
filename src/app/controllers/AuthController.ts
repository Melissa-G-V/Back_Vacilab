import { Request, Response } from 'express';
import UsuarioRepository from '../repositories/UsuarioRepository';
import { Usuario } from '../entity/Usuario';

export const loginHandler = async (req: Request, res: Response) => {
 const { nome, senha } = req.body;
    //console.log(nome)
 const user = await UsuarioRepository.findname(nome);
    console.log(user)
 if (!user) {
   return res.status(400).json({ message: 'User not found' });
 }
 if (!await Usuario.comparePasswords(senha, user.senha)) {
   return res.status(400).json({ message: 'Wrong password' });
 }
 const token = user.generateJwt();
 res.json({ token });
};
