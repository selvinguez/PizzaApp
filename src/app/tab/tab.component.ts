import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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


  ngOnInit(){
      this.productos = this.claseService.getProductos()
  }
}

