import express from "express";
import * as bodyParser from "body-parser";
import logger from "morgan";
import cors from 'cors';
import compression from 'compression';
import * as fs from 'fs';
//import { UserRouter } from './routes';
import router from './routes';
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    // Note: This is more likely to be removed in favour of the approach highlighted in this 
    // article http://withjavascript.com/blog/tdd-a-restful-api-with-node-express-typescript-and-jest-part-1
    config() {
        // Support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // Support application/json type post data
        this.app.use(bodyParser.json());
        //in the meantime (as we don't have any gzip module on nginx yet -
        //we will compress response bodies for all requests) using
        //compression middleware
        this.app.use(compression());
        //we would you morgan for logging requests
        //flags: 'a' opens the file in append mode.
        this.app.use(logger('common', {
            stream: fs.createWriteStream('./access.log', { flags: 'a' })
        }));
        //doing console.log
        this.app.use(logger('dev'));
        //we will use cors middleware for enabling cores and for all requests
        //you can read more about cors here:
        //https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
        const corsMiddleware = cors({ origin: '*', preflightContinue: true });
        this.app.use(corsMiddleware);
        this.app.options('*', corsMiddleware);
        //this.app.use('/user', UserRouter);
        router(this.app);
    }
}
export default new App().app;
