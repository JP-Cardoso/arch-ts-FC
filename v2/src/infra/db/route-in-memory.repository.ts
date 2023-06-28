/**Aqui implementamos um "banco em memória"
 * 
 */

import { Route } from "../../domain/route.entity";
import { RouteRepositoryInterface } from "../../domain/route.repository";

export class RouteInMemoryRespository implements RouteRepositoryInterface {
    items: Route[] = [];
    
    async findAll(): Promise<Route[]> {
        return  this.items;
    };

    async insert(route: Route): Promise<void> {
        await this.items.push(route)
    }

}