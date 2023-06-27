/**
 * vai processar a criação da rota
 * Esse cara está independente de libs de armazenamentos
 */

import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

type CreateRouteInput = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[],
}

type CreateRouteOutput = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[],
}

export class CreateRouteUseCase {

    constructor(
        private routeRepo: RouteRepositoryInterface
    ) {

    }

    async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
        //operações em cima das entidades
        const route = new Route(input);
        await this.routeRepo.insert(route); //Fazendo a inserção da rota
        /**
         * Os dados que estamos retornando, de route, são puros (São todos os dados da entidade
         */
        return route.toJson();
    }
}