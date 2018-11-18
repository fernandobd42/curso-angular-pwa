import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ListarUsuariosService } from 'src/app/services/listar-usuarios.service';
@Injectable({

  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {

  constructor(private listarUsuariosAPI: ListarUsuariosService) { }

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.listarUsuariosAPI.getUser(route.params.id);
  }
}
