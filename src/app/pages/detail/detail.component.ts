import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dragon } from 'src/app/models/dragon.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  public dragon: Dragon;

  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.getDragonById();
  }

  private getDragonById(): void {
    this.api.getDragon(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => this.dragon = res as Dragon);
  }
}
