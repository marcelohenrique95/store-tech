import { FooterComponent } from './component/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './screen/home/home.component';
import { FormsModule } from '@angular/forms';
import { GridComponent } from './component/grid/grid.component';
import { ListaProdutoComponent } from './screen/lista/lista-produto/lista-produto.component';
import { ListaClienteComponent } from './screen/lista/lista-cliente/lista-cliente.component';
import { ListaFornecedorComponent } from './screen/lista/lista-fornecedor/lista-fornecedor.component';
import { CadastroClienteComponent } from './screen/cadastro/cadastro-cliente/cadastro-cliente.component';
import { CadastroProdutoComponent } from './screen/cadastro/cadastro-produto/cadastro-produto.component';
import { CadastroFornecedorComponent } from './screen/cadastro/cadastro-fornecedor/cadastro-fornecedor.component';
import { ListaComponent } from './screen/lista/lista/lista.component';
import { CadastroComponent } from './screen/cadastro/cadastro/cadastro.component';
import { ContatoComponent } from './screen/contato/contato.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HeaderComponent,
    GridComponent,
    ListaProdutoComponent,
    ListaClienteComponent,
    ListaFornecedorComponent,
    CadastroClienteComponent,
    CadastroProdutoComponent,
    CadastroFornecedorComponent,
    ListaComponent,
    CadastroComponent,
    ContatoComponent,
    FooterComponent,
    PageErrorComponent,
    SearchBarComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
