import { Route, RoutesProps } from "../../domain/route.entity";
import { RouteInMemoryRespository } from "./route-in-memory.repository";

describe('Route in memory repository', () => {

    test('Should insert a new route', async () => {
        const repository = new RouteInMemoryRespository();
        const routeProps: RoutesProps = {
            title: 'Minha Rota',
            startPosition: { lat: 5, lng: 10 },
            endPosition: { lat: 10, lng: 15 }
        };
        const route = new Route(routeProps);
        await repository.insert(route); //Iniciando o repositório com a rota

        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual([route])
    });

})