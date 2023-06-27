/**
 * A Regra de Negócio fica em suas entidades
 */
export type LatLng = { lat: number, lng: number };

export type RoutesProps = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[],
};

export class Route {
    public props: Required<RoutesProps>
    constructor(
        props: RoutesProps
    ) {
        // this.props = props
        this.props = {
            ...props,
            points: props.points || []
        }
    };

    get title() {
        return this.props.title
    };

    private set title(value: string) {
        this.props.title = value;
    };

    get startPosition() {
        return this.props.startPosition;
    };

    private set startPosition(value: LatLng) {
        this.props.startPosition = value;
    };

    get endPosition() {
        return this.props.endPosition;
    };

    private set endPosition(value: LatLng) {
        this.props.endPosition = value;
    };

    get points() {
        return this.props.points
    }

    private set points(value: LatLng[]) {
        this.props.points = value;
    }

    updateTitle(value: string) {
        this.title = value;
    };

    updatedPosition(startPosition: LatLng, endPosition: LatLng) {
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    };

    updatedPoints(value: LatLng[]) {
        this.points = value;
    };

    toJson() {
        return this.props;
    }

};

