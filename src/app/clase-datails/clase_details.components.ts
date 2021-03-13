import { style } from "@angular/animations"
import { Component } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { ClaseService } from "../shared/clase.service"

@Component({
  
    template: `
    <app-menu></app-menu>
    
    <div class="text-center">
        <h1 class="list-group-item active">{{product.title}} </h1>
        <img src= {{product.imageURL}} class="rounded" style = "width: '280px'">
        <p>{{product.description}} </p>
        <p>L.{{product.price}}</p>
    </div>
    <div class="text-center">
        <h2>Reseñas </h2>
          
    </div>
    <div class ="row" >
    <div class="col-8 offset-2">
    <ul *ngFor="let clase of review" >
        <li class="list-group-item active"> {{clase.Persona}}:  {{clase.reviews}} </li>
    </ul>
    <ul >
      <form [formGroup]="profileForm" (ngSubmit)="fnReview(profileForm.value)">
          <div class="form-group">
            <label for="Persona">Nombre:</label>
            <input formControlName="Persona"  name="Persona"  id="Persona" type="text" class="form-control" placeholder="Tu nombre.." required />
          </div>
          <div class="form-group">
            <label for="reviews">Comentario:</label>
            <input formControlName="reviews"  name="reviews"  id="reviews" type="text" class="form-control" placeholder="Tu comentario.." required />
          </div>
       </form>
     </ul>      
    <ul>
    <button class="btn btn-secondary" type="submit"  (click)="fnReview(profileForm.value)">Agregar</button>
    <span>&nbsp;&nbsp;&nbsp;</span>    
    <button type="button" class="btn btn-primary" [routerLink]="['/categories', 1, 'Entradas']">  Regresar </button>
    </ul>
    <div>
   </div>    
    `,
    styles: [`
    .pad-left{
        margin-left: 20px;
    }
    ul {
       
        list-style: inside;
      }
    
`]
})
export class DetailProductoComponent
{
    Persona:FormControl
    reviews:FormControl
    product:any
    review:any
    profileForm: FormGroup
    constructor(private claseService: ClaseService,
      private route: ActivatedRoute, private router: Router) {
  
        this.product = this.route.snapshot.data['productos']
        
        console.log(this.review)
        this.Persona = new FormControl("", [
            Validators.required, 
         
          ])
          this.reviews = new FormControl( "",[
            Validators.required, 
         
          ])
          this.profileForm = new FormGroup({
            Persona: this.Persona,
            reviews: this.reviews,
           
        }) 
    }
    fnReview(data){
        data.idProducto = this.product.id
        this.claseService.addReview(data).subscribe(()=> {
  
       })  
       console.log(data)
      }
      ngOnInit() {
        this.review = this.route.snapshot.data['reviews']
      }

}