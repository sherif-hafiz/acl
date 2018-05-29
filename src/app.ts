
import express from "express";
import * as bodyParser from "body-parser";
import { UserRouter } from './routes';


class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();


    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.get("/", (req, res) => {
            res.send(`NODE_ENV=${process.env.NODE_ENV}`);
        });
        this.app.use('/user', UserRouter);

    }

}

export default new App().app;