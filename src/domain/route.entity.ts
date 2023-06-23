// const route = new Route(
//     {
//         title: 'minha rota',
//         startPosition: { lat: 15, lng: 15 },
//         endPosition: { lat: 35, lng: 55 },
//         points: [
//             { lat: 15, lng: 15 },
//             { lat: 35, lng: 55 }
//         ]
//     }
// );
 
/**
 * Descrevendo minhas necessidades
 */

export type LatLng = {
    lat: number, lng: number
}

export type RoutesProps = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[],
}

export class Route {

    public props: Required<RoutesProps>

    constructor(
        props: RoutesProps
    ) {
        // this.props = props;
        this.props = {
            ...props,
            points: props.points || []
        }
    }
    /**
 * Começar a pensar em métodos para mexer fora da classe
 * e apenas os getters and setters mexeram na classe
 */
    get title() {
        return this.props.title;
    };

    private set title(value: string) {
        this.props.title = value;
    };

    get startPosition() {
        return this.props.startPosition
    };

    private set startPosition(value: LatLng) {
        this.startPosition = value
    }

    get endPosition() {
        return this.props.endPosition
    };

    private set endPosition(value: LatLng) {
        this.endPosition = value
    }

    get points() {
        return this.props.points
    }

    private set points(value: LatLng[]) {
        this.points = value;
    }

    updateTitle(value: string) {
        this.title = value
    }

    updatePosition(startPosition: LatLng, endPosition: LatLng) {
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }

    updatePoints(points: LatLng[]) {
        this.points = points
    }

    toJson() {
        return this.props
    }


};


