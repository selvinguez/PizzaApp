import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/clase.module';
import { ClaseService } from '../shared/clase.service';



@Component({
  selector: 'app-productos',
  template: `
     <app-menu></app-menu>
      <h1>Todos Los Productos</h1>
      <hr/>
      <h2>filtro por Categorias :</h2>
      <button (click)="fnCategoria('Boxes')" class="btn btn-light"  >Boxes</button> 
      <button (click)="fnCategoria('Entradas')" class="btn btn-light"  >Entradas</button>
      <button (click)="fnCategoria('Calzone')" class="btn btn-light"  >Calzone</button>
      <button (click)="fnCategoria('Llevar')" class="btn btn-light"  >Llevar</button>
      <button (click)="fnCategoria('Pastas')" class="btn btn-light"  >Pastas</button>
      <button (click)="fnCategoria('Pizza')" class="btn btn-light"  >Pizza</button>
      <button (click)="fntodos()" class="btn btn-light"  >Todos</button>
      <div class="row" >
          <div *ngFor="let claseObj of claseList" class="col-md-3">
              <clase-thumbnail [clase]="claseObj" ></clase-thumbnail>
          </div>
      </div>       
  `,
  styles: [`
      .pad-left{
          margin-left: 20px;
      }
  `]
})
export class ProductosComponent implements OnInit 
{
  claseList:Product[]

  constructor( private producto:ClaseService,
      private route: ActivatedRoute) {
        this.claseList =  this.route.snapshot.data['productos']
  }
 
  ngOnInit(){
     
    this.claseList
  }
  fnCategoria(categoria){
      console.log(categoria)
     this.producto.getProductosByCategory(categoria).subscribe(data => {

        this.claseList = data
    });

  }
  fntodos(){
    this.claseList =  this.route.snapshot.data['productos']
  }

  
}