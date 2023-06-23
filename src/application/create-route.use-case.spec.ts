import { RouteInMemoryRespository } from "../infra/route-in-memory.repository";
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

        expect(output).toStrictEqual(
            {
                title: 'my title',
                startPosition: { lat: 1, lng: 2 },
                endPosition: { lat: 2, lng: 3 },
                points: []
            }
        );
        expect(repository.items).toHaveLength(1);
    })
})