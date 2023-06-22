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

    private set title(value: string) {
        this.props.title = value;
    }

    /**
     * Começar a pensar em métodos para mexer fora da classe
     * e apenas os getters and setters mexeram na classe
     */
};

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

