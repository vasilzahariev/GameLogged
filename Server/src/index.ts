import express, { Express, Request, Response } from "express";

const app : Express = express();
const port : string = process.env.PORT || '8000';

app.get('/', (req : Request, res : Response) : void => {
    res.send('GameLogged REST API');
});

app.listen(port, () : void => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
