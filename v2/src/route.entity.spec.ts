import { LatLng, Route, RoutesProps } from './route.entity';

describe('Route Tests', () => {

    test('Constructor', () => {
        let routeProps: RoutesProps = {
            title: 'Minha Rota',
            startPosition: { lat: 5, lng: 10 },
            endPosition: { lat: 10, lng: 15 }
        };
        let route = new Route(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps, points: []
        });

        routeProps = {
            title: 'Minha Rota',
            startPosition: { lat: 5, lng: 10 },
            endPosition: { lat: 10, lng: 15 },
            points: [
                { lat: 11, lng: 15 }
            ]
        };

        route = new Route(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps,
            points: [
                { lat: 11, lng: 15 }
            ]
        });
    });

    test('Updated Title Method', () => {
        let routeProps: RoutesProps = {
            title: 'Minha Rota',
            startPosition: { lat: 5, lng: 10 },
            endPosition: { lat: 10, lng: 15 }
        };
        let route = new Route(routeProps);

        route.updateTitle('Nova Rota');
        expect(route.title).toStrictEqual('Nova Rota');
    });

    test('Updated Position Method', () => {
        let routeProps: RoutesProps = {
            title: 'Minha Rota',
            startPosition: { lat: 5, lng: 10 },
            endPosition: { lat: 10, lng: 15 }
        };
        let route = new Route(routeProps);
        const start: LatLng = { lat: 20, lng: 30 };
        const end: LatLng = { lat: 30, lng: 45 };
        route.updatedPosition(start, end);

        expect(route.startPosition).toBe(start);
        expect(route.endPosition).toBe(end);
    });

    test('Updated Points Method', () => {
        let routeProps: RoutesProps = {
            title: 'Minha Rota',
            startPosition: { lat: 5, lng: 10 },
            endPosition: { lat: 10, lng: 15 }
        };
        let route = new Route(routeProps);
        const points: LatLng[] = [{ lat: 20, lng: 30 }];
        route.updatedPoints(points);

        expect(route.points).toHaveLength(1);
        expect(route.points).toStrictEqual(points);
    });

})