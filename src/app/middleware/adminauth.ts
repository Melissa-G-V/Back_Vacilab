import { Request,Response,Router,NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
export const AuthAdminJwt = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

    jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error('verification error:', err);
            return res.sendStatus(403);
        }

        req.user = user as JwtPayload;
        if (req.user.definicao === 'admin') {
            next();
        } else {
            res.sendStatus(403);
        }
        });
    } else {
        res.sendStatus(401);
    }
  };