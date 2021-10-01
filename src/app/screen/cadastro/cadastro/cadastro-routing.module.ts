import { CadastroFornecedorComponent } from './../cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroClienteComponent } from './../cadastro-cliente/cadastro-cliente.component';
import { CadastroProdutoComponent } from './../cadastro-produto/cadastro-produto.component';
import { CadastroComponent } from './cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cadastros',
    component: CadastroComponent,
    children: [
      {
        path: '',
        component: CadastroProdutoComponent
      },
      {
        path: 'cadastra-cliente',
        component: CadastroClienteComponent
      },
    ]
  },
  {
    path: 'cadastra-fornecedor',
    outlet:'fornecedor',
    component: CadastroFornecedorComponent
  },
  {
    path: '',
    redirectTo: 'cadastros',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
