import { RouteInMemoryRespository } from "../infra/db/route-in-memory.repository";
import { CreateRouteUseCase } from "./create-route.use-case"

describe('Create Route Use Case', () => {
    test('Should create a new route', async () => {
        const repo = new RouteInMemoryRespository();
        const createUseCase = new CreateRouteUseCase(repo); //Passando o repo como uma depêndecia
        const output = await createUseCase.execute(
            {
                title: 'My Title',
                startPosition: { lat: 1, lng: 3 },
                endPosition: { lat: 2, lng: 4 }
            }
        );

        expect(repo.items).toHaveLength(1)
        expect(output).toStrictEqual(
            {
                id:repo.items[0].id,
                title: 'My Title',
                startPosition: { lat: 1, lng: 3 },
                endPosition: { lat: 2, lng: 4 },
                points: [],
            }
        );

    })
})