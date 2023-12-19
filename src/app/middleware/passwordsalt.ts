import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';


export const hashPassword = async (user: any) => {
    if (user.senha) {
        const saltRounds = 10;
        user.senha = await bcrypt.hash(user.password, saltRounds);
    }
    return user;
};