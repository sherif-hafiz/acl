
import express from "express";
import * as bodyParser from "body-parser";
//import { UserRouter } from './routes';
import router from './routes';


class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();


    }

    // Note: This is more likely to be removed in favour of the approach highlighted in this 
    // article http://withjavascript.com/blog/tdd-a-restful-api-with-node-express-typescript-and-jest-part-1
    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.get("/", (req, res) => {
            res.send(`NODE_ENV=${process.env.NODE_ENV}`);
        });
        //this.app.use('/user', UserRouter);
        router(this.app);

    }

}

export default new App().app;