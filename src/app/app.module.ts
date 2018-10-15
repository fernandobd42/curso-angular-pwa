import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EntrarComponent } from './pages/entrar/entrar.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CadastrarComponent,
    EntrarComponent,
    RecuperarSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
