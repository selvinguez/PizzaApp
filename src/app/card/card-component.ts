import {Component, Input} from '@angular/core';

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
}