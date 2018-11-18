import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.data.user.data);
   }

  ngOnInit() {
  }

}
