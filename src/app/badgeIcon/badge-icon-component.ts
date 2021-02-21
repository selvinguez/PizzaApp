import {Component} from '@angular/core';

/**
 * @title Badge overview
 */
@Component({
  selector: 'badge-icon',
  templateUrl: 'badge-icon-component.html',
})
export class BadgeIconComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
