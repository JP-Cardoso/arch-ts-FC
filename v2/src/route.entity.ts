export type LatLng = { lat: number, lng: number };

export type RouteProps = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points: LatLng[],
};

export default class Route {
    public props: Required<RouteProps>
    constructor(
        props: RouteProps
    ) {
        // this.props = props
        this.props = {
            ...props,
            points: props.points || []
        }
    }

    get title() {
        return this.props.title
    };

    private set title(value: string) {
        this.props.title = value;
    };

    updateTitle(value: string) {
        this.title = value;
    };

};

const rota = new Route(
    {
        title: 'Minha rota',
        startPosition: { lat: 15, lng: 20 },
        endPosition: { lat: 20, lng: 30 },
        points: [
            { lat: 15, lng: 20 },
            { lat: 20, lng: 30 }
        ],
    }
);