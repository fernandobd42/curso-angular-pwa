import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {
  entrarForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.entrarForm);
    this.inicialForm();
    console.log(this.entrarForm);
  }

  inicialForm() {
    this.entrarForm = this.fb.group({
      email: [''],
      senha: ['']
    });
  }

  entrar(form) {
    console.log(form);
  }

}
