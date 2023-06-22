import { Route, RoutesProps } from "./route.entity";

describe('Route testes', () => {

    test('Constructot', () => {
        let routeProps: RoutesProps = {
            title: 'Minha rota',
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 3, lng: 6 },

        };
        let route = new Route(routeProps);
        expect(route.props).toStrictEqual(
            {
                ...routeProps, points: []
            }
        )

        routeProps = {
            title: 'Minha rota',
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 3, lng: 6 },
            points: [
                { lat: 3, lng: 6 },
                { lat: 6, lng: 9 }
            ]
        };
        expect(route.props).toStrictEqual(
            {
                ...routeProps, points: [
                    { lat: 3, lng: 6 },
                    { lat: 6, lng: 9 }
                ]
            }
        )
    })
});