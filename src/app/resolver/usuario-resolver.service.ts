import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ListarUsuariosService } from './../services/listar-usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioResolver implements Resolve<any> {

  constructor(private listarUsuariosAPI: ListarUsuariosService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {
    return this.listarUsuariosAPI.getUser(route.params.id);
  }
}
