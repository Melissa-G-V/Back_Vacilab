import { Request,Response,Router,NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

export const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.error('JWT verification error:', err);
        return res.sendStatus(403);
      }

      req.user = user as JwtPayload;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
