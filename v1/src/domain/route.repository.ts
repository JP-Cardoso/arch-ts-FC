import { Route } from './route.entity';
/**
 * Essa interface, faz uma inversão de dependecia
 */


export interface RouteRepositoryInterface {
    //deixando o processamento já assincrono
    insert(route: Route): Promise<void>
    findAll(): Promise<Route[]>
}