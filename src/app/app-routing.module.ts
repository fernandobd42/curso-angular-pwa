import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EntrarComponent } from './pages/entrar/entrar.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { PainelControleComponent } from './pages/painel-controle/painel-controle.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { UserResolver } from './resolver/user.service';

const routes: Routes = [
  { path: '', redirectTo: '/cadastrar', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'recuperar-senha', component: RecuperarSenhaComponent },
  { path: 'painel-controle', component: PainelControleComponent },
  { path: 'listar-usuarios', component: ListarUsuariosComponent },
  { path: 'usuario/:id', component: UsuarioComponent, resolve: { user: UserResolver } },
  { path: '**', redirectTo: '/cadastrar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
