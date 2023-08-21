import { NextFunction, Request, Response } from "express";
import Authorization from "../services/Authorization";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const itemsRequestController = (req : Request, res : Response, next : NextFunction) => {
    if (!req.body.type || !req.body.page || !req.body.quantityPerPage || !req.body.productGroup) {
        return res.status(400).send({message : "Missing required field"});
    }
    return next();
}

export const authorization = (req : Request, res : Response, next : NextFunction) => {
    const instance = new Authorization(process.env.SECRET_KEY as jwt.Secret);
    const token : string = req.headers["token"] as string;
    if(token) {
        if(instance.verify(token)) {
            return next();
        }
        else {
            return res.status(401).send({message: "can't verify"})
        }
    }
    return res.status(400).send({message: "token undefined"});
}