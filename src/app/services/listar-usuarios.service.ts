import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any> {
    const params = new HttpParams().set('per_page', '12');

    return this.http.get(this.url + '/users/', { params });
  }

  getUser(id: string): Observable<any> {
    return this.http.get(this.url + '/users/' + id);
  }
}
