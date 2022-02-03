import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperAndVillainsService {
  readonly WEB_URL: string = 'http://localhost:3000';
  constructor(private _http: HttpClient) {  }

  getAll(): Observable<any> {
    return this._http.get(`${this.WEB_URL}/super-heroes`);
  }

  getSuperHeroesVisibleDisabled(): Observable<any> {
    return this._http.get(`${this.WEB_URL}/getSuperHeroesVisibleDisabled`);
  }
  getHiddenVillainsEnabled(): Observable<any> {
    return this._http.get(`${this.WEB_URL}/getHiddenVillainsEnabled`);
  }

  getById(data: any = {}): Observable<any> {
    return this._http.post(`${this.WEB_URL}/GetItemById`, data);
  }

  Update(data: any = {}): Observable<any> {
    return this._http.post(`${this.WEB_URL}/Update`, data);
  }
  
  Delete(data: any = {}): Observable<any> {
    return this._http.post(`${this.WEB_URL}/Delete`, data);
  }
  
}
