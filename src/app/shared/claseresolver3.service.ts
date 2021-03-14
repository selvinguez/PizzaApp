import { Injectable ,} from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";

import { map } from "rxjs/operators";
import { ClaseService } from "./clase.service";

@Injectable()
export class ClaseListResolver3 implements Resolve<any> {

    constructor(private claseService: ClaseService) {
       
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       
        return this.claseService.getReviewsById(route.params['myid']).pipe(map(reviews => reviews))
    }
}