
import { Request, Response } from 'express';

export class ContactController {

    public addUser(req: Request, res: Response) {
        console.log('New user added');
    }

    public getUsers(req: Request, res: Response) {
        console.log('Get users');
    }

    public getUserByID(req: Request, res: Response) {

    }

    public updateUser(req: Request, res: Response) {

    }

    public deleteUser(req: Request, res: Response) {

    }

}