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
    id: string
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[],
}[]

export class ListAllRoutesUseCase {

    constructor(
        private routeRepo: RouteRepositoryInterface
    ) {

    }

    async execute(): Promise<CreateRouteOutput> {
        //operações em cima das entidades
        /**
         * Os dados que estamos retornando, de route, são puros (São todos os dados da entidade
        */
        const routes = await this.routeRepo.findAll();
        return routes.map(r => r.toJson())
    }
}