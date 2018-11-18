import { Component, OnInit, ViewChild } from '@angular/core';
import { ListarUsuariosService } from 'src/app/services/listar-usuarios.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'first_name', 'last_name'];
  dataSource: MatTableDataSource<UserData>;

  constructor(private listarUsuariosAPI: ListarUsuariosService) { }

  ngOnInit() {
   this.listarUsuariosAPI.getUsersList().subscribe(users => {
    this.dataSource = new MatTableDataSource(users.data);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
