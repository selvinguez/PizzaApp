import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaseService } from '../shared/clase.service';



@Component({
  selector: 'app-productos',
  template: `
     <app-menu></app-menu>
      <h1 style="margin-left: 20px">Orden</h1>
      <hr/>
      <div class="col" style="overflow-y: scroll; height:530px;">
        <div class="row" *ngFor="let product of productos; let i = index" data-index="#i" class="col-md-12" style="display: flex;align-items: center; width: 30%; margin-left: 16px;margin-bottom: 15px;">
            <div class="col-8" style="display: flex;align-items: center;">
              <img src="{{product.imageURL}}" style="width: 50px;height: 50px;border-radius: 25px;border: solid 2px;">
              <h1 style="margin-top: 15px; margin-left: 15px;">{{product.title}}</h1>
              
            </div>
            <div class="col-3">
              <h2 style="margin-top: 15px; margin-left: 15px;">L. {{product.price}}</h2>
            </div>
            <div class="col-2">
              <button class="btn btn-danger" (click)="deleteFromCart(i)" >X</button>
            </div>
        </div>
        <div><button class="btn btn-success" style="margin: 0% 12%;width: 8%;">Pago</button></div>
    </div>       
  `,
  styles: [`
      .pad-left{
          margin-left: 20px;
      }
  `]
})
export class CheckoutComponent implements OnInit 
{
  productos:any

  constructor( private producto:ClaseService,
      private route: ActivatedRoute, private router: Router) {
      
  }

  //hooks
  ngOnInit(){
      this.productos = this.producto.getCart();
  }

  deleteFromCart(index){
    this.productos = this.producto.deleteFromCartById(index);
    this.productos = this.producto.getCart();
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  
}