import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public appPages = [
    { title: 'Notas', url: '/home', icon: 'home' },
    { title: 'Crear Nota', url: '/create-note', icon: 'book' },
    { title: 'Corte De Caja', url: '/corte-caja', icon: 'cash' },
    { title: 'Cambiar contraseña', url: '/change-password', icon: 'key' },
    { title: 'Cerrar Sesion', url: '/login', icon: 'exit' } 
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() { }

  ngOnInit() {
  }

}
