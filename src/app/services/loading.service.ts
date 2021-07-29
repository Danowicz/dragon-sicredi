import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loader$ = new Subject();

  public iniciar(): void {
    this.loader$.next(true);
  }

  public parar(): void {
    this.loader$.next(false);
  }
}
