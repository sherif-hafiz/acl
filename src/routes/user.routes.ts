import { Router, Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { UserController } from "../controllers/user.controllers";

// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    // Reply with a hello world when no name param is provided
    //res.send('Hello, World!');
    UserController.addUser(req, res);

});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    // Extract the name from the request parameters
    //let { id } = req.params;

    // Greet the given name
    //res.send(`Hello, ${id}`);
    UserController.getUserByID(req, res);
    next()
}, (req: Request, res: Response, next: NextFunction) => {
    console.log("Something could potentially be logged in here");
    //res.send('Something');
});

// Export the express.Router() instance to be used by server.ts
export const UserRouter: Router = router;