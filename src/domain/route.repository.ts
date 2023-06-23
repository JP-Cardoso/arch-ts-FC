/**
 * Essa interface, faz uma inversão de dependecia
 */

import { Route } from "./route.entity";

export interface RouteRepositoryInterface {
    //deixando o processamento já assincrono
    insert(route: Route): Promise<void>
}