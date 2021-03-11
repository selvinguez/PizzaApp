import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product } from '../shared/clase.module';
import { ClaseService } from "../shared/clase.service";

@Component({
  selector: 'tab-component',
  templateUrl: 'tab.component.html',
})
export class TabGroupComponent {
  selectedTab:any = 0;
  constructor(public claseService: ClaseService, private route: ActivatedRoute) {
    
  }
  productos:any
  headers:any 
  CATEGORIAS:any = []
  toggleCategory($event){
    this.CATEGORIAS = []

     const category = $event.tab.textLabel
      this.productos =  this.route.snapshot.data['productos'];
      console.log(this.CATEGORIAS)
       this.productos.map(producto=>{
         (producto.category === category)?this.CATEGORIAS.push(producto):null
       })
      console.log(this.productos)
    
  }


  ngOnInit(){
      const category = this.route.snapshot.params['category'];
      this.productos =  this.route.snapshot.data['productos'];
      console.log(this.CATEGORIAS)
       this.productos.map(producto=>{
         (producto.category === category)?this.CATEGORIAS.push(producto):null
       })
      console.log(this.productos)
      this.selectedTab = this.route.snapshot.params['index'];
  }
}

