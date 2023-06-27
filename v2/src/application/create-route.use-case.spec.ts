import { RouteInMemoryRespository } from "../infra/route-in-memory.repository";
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

        expect(output).toStrictEqual(
            {
                title: 'My Title',
                startPosition: { lat: 1, lng: 3 },
                endPosition: { lat: 2, lng: 4 },
                points: [],
            }
        );
        expect(repo.items).toHaveLength(1)

    })
})