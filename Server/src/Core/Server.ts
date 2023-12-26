import express, { Express } from "express";
import Database from "./Database";
import dotEnv from 'dotenv';
import GameRouter from "../Components/Game/GameRouter";

class Server {
    public async init() : Promise<void> {
        this.initEnvironmentVariables();

        await Database.connect();

        this.app.use('/api/', GameRouter.router);

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
