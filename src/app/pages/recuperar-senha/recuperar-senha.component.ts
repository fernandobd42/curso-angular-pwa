import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import swal from 'sweetalert2';

import { MyErrorStateMatcher } from 'src/app/utils/errorStateMatcher';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss']
})
export class RecuperarSenhaComponent implements OnInit {
  matcher: ErrorStateMatcher = new MyErrorStateMatcher;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Email é obrigatório' :
        this.email.hasError('email') ? 'Digite um email válido' :
            '';
  }

  recuperar(email) {

    if (email.invalid) {
      email.markAsTouched();
      return;
    }

    swal({
      type: 'success',
      title: 'Um link para a troca de email foi enviado para este email:',
      text: `${email.value}`,
      showConfirmButton: false,
      timer: 4000
    });

    this.router.navigate(['/entrar']);

    console.log(email);
  }
}
