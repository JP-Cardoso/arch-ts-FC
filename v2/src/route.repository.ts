import { Route } from "./route.entity";

/**
 * Um repo dentro do clean arch, ele vai lidar 
 * apenas com a própria entidade.
 * 
 * Essa interface está fazendo uma inversão de depêndecia;
 * Criamos um adaptador, que será recebido no constructor do 
 * repositório.
 * E a lib que vai lidar com essa interface.
 */
export interface RouteRepositoryInterface {
    //Não vai retornar nada, mas ele já vai ser assincrono
    insert(route: Route): Promise<void> 
};