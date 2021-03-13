import { style } from "@angular/animations"
import { Component } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { ClaseService } from "../shared/clase.service"

@Component({
  
    template: `
    <app-menu></app-menu>
    
    <div class="text-center">
        <h1 style="background-color:powderblue;">{{product.title}} </h1>
        <img src= {{product.imageURL}} class="rounded" style = "width: '280px'">
        <p>{{product.description}} </p>
        <p>L.{{product.price}}</p>
        <button class="btn btn-dark" [routerLink]="['/categories', 1, 'Entradas']">Regresar</button>
    </div>
    `,
    styles: [`
    .pad-left{
        margin-left: 20px;
    }
    
`]
})
export class DetailProductoComponent
{
    product:any
    constructor(private claseService: ClaseService,
      private route: ActivatedRoute, private router: Router) {
  
        this.product = this.route.snapshot.data['productos']
    }
  

}