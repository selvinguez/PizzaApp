import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from '../shared/clase.module';
import { ClaseService } from "../shared/clase.service";

@Component({
  selector: 'tab-component',
  templateUrl: 'tab.component.html',
})
export class TabGroupComponent {
  selectedTab:any = 0;
  focusIndex: number
  constructor(public claseService: ClaseService, private route: ActivatedRoute, private router: Router) {
    
  }
  productos:any
  headers:any 
  toggleCategory($event){
    this.selectedTab = $event.index;
    const category = $event.tab.textLabel;
    const index = this.route.snapshot.params['index'];
    this.claseService.getProductosByCategory(category).subscribe(data => {
      this.productos = data;
    });
    this.router.navigate(['categories/'+this.selectedTab+'/'+category]);
    
  }


  ngOnInit(){
    this.selectedTab = this.route.snapshot.params['index'];
    this.claseService.getProductosByCategory(this.route.snapshot.params['category']).subscribe(data => {
      this.productos = data;
    });
  }
}

