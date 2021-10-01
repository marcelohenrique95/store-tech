import { PageErrorComponent } from './page-error/page-error.component';
import { CadastroFornecedorComponent } from './screen/cadastro/cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroClienteComponent } from './screen/cadastro/cadastro-cliente/cadastro-cliente.component';
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
    path: 'cadastro-cliente',
    component: CadastroClienteComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: '**',
    component: PageErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
