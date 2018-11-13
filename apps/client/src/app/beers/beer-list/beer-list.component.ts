import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngpoland-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
