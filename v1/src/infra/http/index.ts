/**
 * Aui será usado o caso de uso da aplicação,
 * a camada de aplicação
*/

import express, { Express, Request, Response } from "express";
import { CreateRouteUseCase } from "../../application/create-route.use-cases";
import { RouteInMemoryRespository } from "../db/route-in-memory.repository";
import { ListAllRoutesUseCase } from "../../application/list-all-routes.use-cases";


const app: Express = express();
const port = process.env.PORT || 3000;
const routeRepo = new RouteInMemoryRespository();

app.use(express.json());

app.post('/routes', async (req: Request, res: Response) => {
    const createUseCase = new CreateRouteUseCase(routeRepo);
    const output = await createUseCase.execute(req.body);
    res.status(200).json(output);
});

app.get('/routes', async (req: Request, res: Response) => {
    const listAll = new ListAllRoutesUseCase(routeRepo);
    const output = await listAll.execute();
    res.json(output);
});

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});