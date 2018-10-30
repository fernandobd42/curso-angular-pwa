import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import swal from 'sweetalert2';

import { MyErrorStateMatcher } from 'src/app/utils/errorStateMatcher';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {
  entrarForm: FormGroup;
  errorMsg: String = '';
  matcher: ErrorStateMatcher = new MyErrorStateMatcher;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inicialForm();
  }

  inicialForm() {
    this.entrarForm = this.fb.group({
      email: ['',
        [Validators.required, Validators.email]
      ],
      senha: ['',
        [Validators.required, Validators.minLength(8)]
      ]
    });
  }

  get(atributo: string) {
    return this.entrarForm.controls[`${atributo}`];
  }

  entrar(form) {
    this.errorMsg = '';
    const values = form.value;

    if (form.invalid) {
      Object.values(form.controls).map((atributo: FormControl) => {
        atributo.markAsTouched();
      });

      return;
    }

    if (values.email !== 'fernando@gmail.com' || values.senha !==  'senha123') {
      this.errorMsg = 'Email ou senha estão incorretos';
      return;
    }

    swal({
      type: 'success',
      title: 'Seja Bem Vindo a plataforma',
      text: `${values.email}`,
      showConfirmButton: false,
      timer: 4000
    });

    console.log(values);
  }

}
