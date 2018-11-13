import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Beer } from '@ngpoland/shared';

@Component({
  selector: 'ngpoland-beer-list-item',
  templateUrl: './beer-list-item.component.html',
  styleUrls: ['./beer-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListItemComponent {
  @Input() item: Beer;
}
