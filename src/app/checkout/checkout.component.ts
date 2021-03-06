import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { ClaseService } from "../shared/clase.service";

/**
 * @title Proceed to checkout view
 */
@Component({
  selector: 'checkout-component',
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.css'],
})
export class CheckoutComponent {
  constructor(public ClaseService:ClaseService,private router: Router) {
  }

}