import {ChangeDetectorRef, Component, Input} from '@angular/core';
import { ClaseService } from "../shared/clase.service";

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
  constructor(public ClaseService:ClaseService) {
  }

  addToCart(): void {
    this.ClaseService.addToCart(this.product);
  }
}