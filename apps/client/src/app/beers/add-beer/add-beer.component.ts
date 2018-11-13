import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngpoland-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBeerComponent {}
