import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  open: boolean = false;
  menuOptions =  [
    {label: 'Home' , link: '/home'},
    {label: 'Cadastro' , link: '/cadastros'},
    {label: 'Lista' , link: '/listas'},
    {label: 'Contato' , link: '/contato'},
    {label: 'teste' , link: '/teste'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  metodoClicar(){
    this.open = true;
  }

}
