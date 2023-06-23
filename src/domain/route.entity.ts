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
import crypto from 'crypto'
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
    public readonly id: string;
    constructor(
        props: RoutesProps,
        id?: string
    ) {
        // this.props = props;
        this.id = id || crypto.randomUUID()
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
        this.props.startPosition = value
    }

    get endPosition() {
        return this.props.endPosition
    };

    private set endPosition(value: LatLng) {
        this.props.endPosition = value
    }

    get points() {
        return this.props.points
    }

    private set points(value: LatLng[]) {
        this.props.points = value;
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
        return {
            id: this.id,
            ...this.props
        }
    }


};


