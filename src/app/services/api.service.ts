import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Dragon } from '../models/dragon.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getDragon(id?: string): Observable<Dragon> {
    return this.http.get<any>(environment.apiUrl + '/' + id);
  }

  public deleteDragon(id: string): Observable<Dragon> {
    return this.http.delete<Dragon>(environment.apiUrl + '/' + id);
  }

  public createDragon(id: string, dragon: Dragon): Observable<Dragon> {
    return this.http.post<Dragon>(environment.apiUrl + '/' + id, dragon);
  }

  public updateDragon(id: string, dragon: Partial<Dragon>): Observable<Partial<Dragon>> {
    return this.http.put<Partial<Dragon>>(environment.apiUrl + '/' + id, dragon);
  }
}
