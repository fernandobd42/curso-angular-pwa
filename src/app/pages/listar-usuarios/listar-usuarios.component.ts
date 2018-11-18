import { Component, OnInit } from '@angular/core';
import { ListarUsuariosService } from 'src/app/services/listar-usuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  users: any[] = [];
  constructor(private listarUsuariosAPI: ListarUsuariosService) { }

  ngOnInit() {
   this.listarUsuariosAPI.getUsersList().subscribe(response => {
    this.users = response;
    console.log(this.users);
   });
  }

}
