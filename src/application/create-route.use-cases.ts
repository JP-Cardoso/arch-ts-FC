/**
 * Casos de usos cordernam as regras de negócio mais puras da aplicação.
 * Nesse caso a única, responsabilidade desse caso de uso é criar uma
 * nova rota
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 * Caso de uso sempre vai ser uma camada que contem algumas regras de negócio,
 * mas não seram de forma pura. É nela que você vai ter toda a questão de 
 * salvar os dados.
 */

import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

type CreateRouteInput = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[];
}

type CreateRouteOutput = {
    id: string
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[];
}

export class CreateRouteUseCase {

    constructor(
        private routeRepo: RouteRepositoryInterface,
    ) { }

    //O retorno está como uma promise.
    async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
        //Operações em cima das entidades
        const route = new Route(input);
        await this.routeRepo.insert(route);
        return route.toJson();

    }
}