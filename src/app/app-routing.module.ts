import { ContatoComponent } from './screen/contato/contato.component';
import { ListaComponent } from './screen/lista/lista/lista.component';
import { CadastroComponent } from './screen/cadastro/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';

const routes: Routes = [
  {
    path: '',
        redirectTo: 'home',
        pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cadastros',
    component: CadastroComponent
  },
  {
    path: 'listas',
    component: ListaComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
