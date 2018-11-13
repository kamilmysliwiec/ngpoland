import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Beer } from '@ngpoland/shared';
import { Observable } from 'rxjs';
import { BeersService } from '../beers.service';

@Component({
  selector: 'ngpoland-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListComponent implements OnInit {
  beers$: Observable<Beer[]> = this.beersService.findAll();

  constructor(private readonly beersService: BeersService) {}

  ngOnInit() {}
}
