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
      
  }
 

  
  ngOnInit(){
     
      this.claseList =  this.route.snapshot.data['productos']
      console.log(this.claseList)
  }

  
}