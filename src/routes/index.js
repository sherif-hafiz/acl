import { Router } from 'express';
import { UserRouter } from './user.routes';
const router = (app) => {
    //init your main express router
    const apiRouter = Router();
    //handle GET request to /api/v1
    /*apiRouter.get('/', (req: Request, res: Response) => {
        res.status(200).json({ message: "This is where the awesomeness happen..." });
    });*/
    /* apiRouter.get("/", (req: Request, res: Response) => {
         //res.send(`NODE_ENV=${process.env.NODE_ENV}`);
         res.status(200).json({ message: "This is where the awesomeness happen..." });
     });*/
    app.use('/', Router().get('/', (req, res) => {
        res.status(200).json({ message: "This is where the awesomeness happen..." });
    }));
    app.use('/api/v1', apiRouter);
    app.use('/user', UserRouter);
};
export default router;
//export * from './user.routes';
