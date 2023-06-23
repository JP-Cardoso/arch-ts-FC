import { RouteInMemoryRespository } from "../infra/db/route-in-memory.repository";
import { CreateRouteUseCase } from "./create-route.use-cases"

describe('CreateRouteUseCase', () => {

    it('Should create a new route', async () => {
        const repository = new RouteInMemoryRespository()
        const createUseCase = new CreateRouteUseCase(repository);

        const output = await createUseCase.execute(
            {
                title: 'my title',
                startPosition: { lat: 1, lng: 2 },
                endPosition: { lat: 2, lng: 3 }
            }
        );

        expect(repository.items).toHaveLength(1);
        expect(output).toStrictEqual(
            {
                id: repository.items[0].id,
                title: 'my title',
                startPosition: { lat: 1, lng: 2 },
                endPosition: { lat: 2, lng: 3 },
                points: []
            }
        );
    })
})