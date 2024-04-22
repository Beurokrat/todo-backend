import { Request, Response } from "express";

export function defaultController(req: Request, res: Response){
    return res.status(200).send({
        message: "Hello World"
    })
}