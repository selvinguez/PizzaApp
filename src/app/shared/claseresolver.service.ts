import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { map } from "rxjs/operators";
import { ClaseService } from "./clase.service";

@Injectable()
export class ClaseListResolver implements Resolve<any> {

    constructor(private claseService: ClaseService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.claseService.getProductos().pipe(map(productos => productos))
    }

}