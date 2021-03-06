import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClaseService } from '../shared/clase.service';



@Component({
  selector: 'app-productos',
  template: `
     <app-menu></app-menu>
      <h1>Todos Los Productos</h1>
      <hr/>
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
  claseList

  constructor( private producto:ClaseService,
      private route: ActivatedRoute) {
      
  }

  //hooks
  ngOnInit(){
      // this.claseService.getClases().subscribe(clases=> 
      //     {
      //         this.claseList =clases;
      //     });
      this.claseList = this.producto.getProductos()
  }

  
}