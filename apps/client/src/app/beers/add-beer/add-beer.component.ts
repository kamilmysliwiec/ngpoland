import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngpoland-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBeerComponent {
  readonly addBeerForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.addBeerForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      rating: [null, Validators.required]
    });
  }
}
