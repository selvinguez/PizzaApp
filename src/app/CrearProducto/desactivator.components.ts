import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CrearProductoComponent } from "./crearProducto.components";


@Injectable()
export class ClaseRouteDeactivator implements CanDeactivate<CrearProductoComponent>
{
    canDeactivate(component:CrearProductoComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: 
        RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
            if(component.isDirty){
                
                return window.confirm('No has salvado este Producto, ¿esta seguro que desea continuar?')
            }

            return true;
    }

}