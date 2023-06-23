import { Route, RoutesProps } from "../domain/route.entity";
import { RouteInMemoryRespository } from "./route-in-memory.repository"

//application infrastructure testing
describe('RouteInMemoryRepository', () => {

    it('Should insert a new route', async () => {
        const repository = new RouteInMemoryRespository();
        const routePros: RoutesProps = {
            title: 'Minha rota',
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        };
        const route = new Route(routePros);
        await repository.insert(route);

        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual([route])

    })
})