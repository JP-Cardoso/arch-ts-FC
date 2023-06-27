//vai processar a criação da rota

import { LatLng, Route } from "./route.entity";

type CreateRouteInput = {
    title: string;
    startPoinsts: LatLng;
    endPoinsts: LatLng;
    points?: LatLng[];
}

type CreateRouteOutput = {
    title: string;
    startPoinsts: LatLng;
    endPoinsts: LatLng;
    points?: LatLng[];
}

class CreateRouteUseCase {

    execute(input: CreateRouteInput): CreateRouteOutput {
        //operações em cima das entidades
        const route = new Route(input);
        return {

        }
    }
}