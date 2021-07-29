import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dragon } from 'src/app/models/dragon.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent {

  public form: FormGroup;
  public dragon: Dragon;
  public isUpdating: boolean;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const state = (this.router.getCurrentNavigation() as any).extras.state;
    this.dragon = state && state.dragon;

    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required]
    });

    if (this.dragon) {
      this.isUpdating = true;
      this.form.patchValue(this.dragon);
    }

  }

  public validateAndPost(): void {
    if (this.form.valid) {
      this.postDragon();
    }
  }

  private postDragon(): void {
    const dragon = new Dragon(
      this.form.get('name').value,
      this.form.get('type').value
    );

    if (this.dragon) {
      this.api.updateDragon((this.dragon as any).id, dragon)
        .subscribe(() => this.router.navigate(['list']));
    } else {
      this.api.createDragon(dragon)
        .subscribe(() => this.router.navigate(['list']));
    }

  }

}
