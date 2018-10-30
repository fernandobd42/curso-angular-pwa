import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { MyErrorStateMatcher } from 'src/app/utils/errorStateMatcher';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {
  entrarForm: FormGroup;
  matcher: ErrorStateMatcher = new MyErrorStateMatcher;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.entrarForm);
    this.inicialForm();
    console.log(this.entrarForm);
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
    console.log(form);
  }

}
