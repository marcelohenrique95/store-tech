import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})

export class CadastroClienteComponent implements OnInit {
  onEdit: boolean = false;
  name: string;
  age: number;
  clients: Client[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  save() {
    this.clients.push(
      {name: this.name, age: this.age}
    );
    this.name = "";
    this.age = 0;
  }

}
