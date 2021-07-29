import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dragon } from 'src/app/models/dragon.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  dragons: Dragon[];

  constructor(public api: ApiService, private router: Router) {
    this.getDragons();
  }

  public dragonDetails(id: string): void {
    this.router.navigate(['/detail', id]);
  }

  public editDragon(dragon: Dragon): void  {
    this.router.navigate(['/creation'], { state: { dragon }, skipLocationChange: true });
  }

  public registrate(): void {
    this.router.navigate(['/creation'], { skipLocationChange: true });
  }

  public deleteDragon(id: string): void {
    this.api.deleteDragon(id).subscribe(() => this.getDragons());
  }

  private getDragons(): void {
    this.api.getDragon().subscribe(res => {
      this.dragons = res as Dragon[];
    });
  }

}
