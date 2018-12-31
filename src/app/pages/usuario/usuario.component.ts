import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    const user = this.route.snapshot.data.user.data;
    this.initialForm(user);
   }

  ngOnInit() {
    console.log(this.usuarioForm);
  }

  initialForm(dadosUsuario) {
    this.usuarioForm = this.fb.group({
      img: dadosUsuario.avatar,
      primeiro_nome: dadosUsuario.first_name,
      ultimo_nome: dadosUsuario.last_name
    });
  }

  getImg() {
    return this.usuarioForm.value.img;
  }

  selectImg(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (res: any) => {
        this.usuarioForm.get('img').setValue(res.target.result);
      };
    }
  }
}
