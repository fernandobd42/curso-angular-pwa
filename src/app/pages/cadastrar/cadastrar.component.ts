import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import swal from 'sweetalert2';

import { MyErrorStateMatcher } from './../../utils/errorStateMatcher';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  cadastroForm: FormGroup;
  matcher: ErrorStateMatcher = new MyErrorStateMatcher();
  errorMsg: String = '';
  hidePassword: Boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.inicialForm();
  }

  inicialForm() {
    this.cadastroForm = this.fb.group({
      nome: ['',
        [Validators.required, Validators.minLength(8)]
      ],
      email: ['',
        [Validators.required, Validators.email]
      ],
      senha: ['',
        [Validators.required, Validators.minLength(8)]
      ],
      confirmarSenha: ['',
        [Validators.required, Validators.minLength(8)]
    ]
    });
  }

  get(atributo: string) {
    return this.cadastroForm.controls[`${atributo}`];
  }

  cadastrar(form) {
    this.errorMsg = '';

    if (form.invalid) {
      Object.values(form.controls).map((atributo: FormControl) => {
        atributo.markAsTouched();
      });

      return;
    }

    if (this.get('senha').value !== this.get('confirmarSenha').value) {
      this.errorMsg = 'Confirmar senha deve ser igual a senha';
      return;
    }

    swal({
      type: 'success',
      title: 'Cadastro Realizado com Sucesso',
      text: `${form.value.nome} - ${form.value.email}`,
      showConfirmButton: false,
      timer: 4000,
    });

    this.router.navigate(['/entrar']);
    console.log(form.value);
  }
}
