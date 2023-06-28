import express, { Express, Request, Response } from "express";
import { CreateRouteUseCase } from "../../../application/create-route.use-case";
import { RouteInMemoryRespository } from "../../db/route-in-memory.repository";
import { ListAllRoutesUseCase } from "../../../application/list-all-route.use-case";

const app: Express = express();
app.use(express.json());

const routeRepo = new RouteInMemoryRespository();
const port = process.env.Port || 3000;

app.post('/routes', async (req: Request, res: Response) => {
    const createUseCase = new CreateRouteUseCase(routeRepo);
    const output = await createUseCase.execute(req.body);
    res.status(201).json(output);
});

app.get('/routes', async(req: Request, res: Response) => {
    const listAllRoutesUseCase = new ListAllRoutesUseCase(routeRepo);
    const output = await listAllRoutesUseCase.execute();
    res.json(output);
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});