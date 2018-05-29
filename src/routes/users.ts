import { Request, Response } from "express";

export class Users {
    // Any should be replaced as this is not best practice
    public routes(app: any): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET user request successfulll!!!!'
                })
            })
    }
}