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

     const category = $event.tab.textLabel;
      this.claseService.getProductosByCategory(category).subscribe(data => {
        this.productos = data;
      });
    
  }


  ngOnInit(){
    this.selectedTab = this.route.snapshot.params['index'];
    this.claseService.getProductosByCategory(this.route.snapshot.params['category']).subscribe(data => {
      this.productos = data;
    });

  }
}

