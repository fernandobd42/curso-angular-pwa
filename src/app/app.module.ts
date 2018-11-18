import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatRippleModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EntrarComponent } from './pages/entrar/entrar.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { PainelControleComponent } from './pages/painel-controle/painel-controle.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CadastrarComponent,
    EntrarComponent,
    RecuperarSenhaComponent,
    PainelControleComponent,
    MenuComponent,
    ListarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
