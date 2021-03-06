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

  toggleCategory($event){
    this.productos = this.claseService.getProductosByCategory($event.tab.textLabel);
  }


  ngOnInit(){
      const category = this.route.snapshot.params['category'];
      this.productos = this.claseService.getProductosByCategory(category);
      this.selectedTab = this.route.snapshot.params['index'];
  }
}

