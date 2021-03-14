import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ClaseService } from "../shared/clase.service";
import { ToasterService } from '../toaster.service';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card-component',
  templateUrl: 'card-component.html',
  styleUrls: ['card-component.css'],
})
export class CardComponent {
  @Input() product:any
  constructor(public ClaseService:ClaseService,private router: Router, private tos : ToasterService,) {
  }
  
  addToCart(): void {
    this.ClaseService.addToCart(this.product);
    const {title} = this.product;
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
    this.tos.success(`${title} agregado al carrito`);
  }
}