
import { Request, Response, NextFunction } from 'express';

export class UserController {
    // NOTE: static method, easier for testing
    // Annotate methods
    public static addUser(req: Request, res: Response): void {
        // Reply with a hello world when no name param is provided
        res.send('Hello, World!!!');
    }

    public getUsers(req: Request, res: Response): void {
        console.log('Get users');
    }

    public static getUserByID(req: Request, res: Response): void {
        let { id } = req.params;
        res.send(`User's ID is, ${id}`);
    }

    public updateUser(req: Request, res: Response): void {

    }

    public deleteUser(req: Request, res: Response): void {

    }

}