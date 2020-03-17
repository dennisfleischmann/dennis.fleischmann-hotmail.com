import { Request, Response, NextFunction, Router } from "express";
import { HTTP401Error } from "../utils/httpErrors";
import jwt from "jsonwebtoken";
import fs from "fs";

 const BearerTokenVerificationHandler = (
    router: Router
) => {
    router.use(async (err: any, req: any, res: any, next: any) => {

    if (process.env.NODE_ENV === "production") {
    const token: any = null // TODO: Extract token from Header
    
    const cert = fs.readFileSync('public.pem'); 
    try {
        jwt.verify(token, cert);
        next();
    } catch {
        throw new HTTP401Error("Unauthorized");
    }

    } else {
        next();
    }
    });
}

export default [BearerTokenVerificationHandler]