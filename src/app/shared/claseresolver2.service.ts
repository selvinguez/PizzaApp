import { Injectable ,} from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";

import { map } from "rxjs/operators";
import { ClaseService } from "./clase.service";

@Injectable()
export class ClaseListResolver2 implements Resolve<any> {

    constructor(private claseService: ClaseService) {
       
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       
        return this.claseService.getProductoById(route.params['myid']).pipe(map(productos => productos))
    }
}