import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'notas', url: '/home', icon: 'home' },
    { title: 'notas', url: '/notas', icon: 'book' },
    { title: 'Corte De Caja', url: 'Corte-Caja', icon: 'cash' },
    { title: 'Cambiar contraseña', url: '/change-password', icon: 'key' },
    { title: 'Cambiar contraseña', url: '/change-password', icon: 'key' } 
  ];
  constructor() {}
}
