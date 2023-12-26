import express, { Express } from "express";
import Database from "./Database";
import dotEnv from 'dotenv';
import GameRouter from "../Components/Game/GameRouter";
import CompanyRouter from "../Components/Company/CompanyRouter";
import UserRouter from "../Components/User/UserRouter";
import ReviewRouter from "../Components/Review/ReviewRouter";
import ListRouter from "../Components/List/ListRouter";

class Server {
    public async init() : Promise<void> {
        this.initEnvironmentVariables();

        await Database.connect();

        UserRouter.init(this.app, '/api/u/');
        GameRouter.init(this.app, '/api/g/');
        ReviewRouter.init(this.app, '/api/r/');
        ListRouter.init(this.app, '/api/l/');
        CompanyRouter.init(this.app, '/api/c/');

        this.app.listen(this._port, this.onConnection.bind(this));
    }

    public get port() : number {
        return this._port;
    }

    private app : Express = express();

    private _port : number;

    private initEnvironmentVariables() : void {
        dotEnv.config();

        this._port = parseInt(process.env.PORT || '8000');

        Database.initEnvironmentVariables();
    }

    private onConnection() : void {
        console.log(`[server]: Server is running at http://localhost:${this._port}`);
    }
}

export default new Server();
