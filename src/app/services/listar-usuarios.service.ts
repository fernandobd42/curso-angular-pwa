import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any> {
    return this.http.get(this.url + '/users/' );
  }
}
