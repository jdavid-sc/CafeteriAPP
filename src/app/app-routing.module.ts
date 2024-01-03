import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'starting',
    pathMatch: 'full'
  },
  {
    path: 'starting',
    loadChildren: () => import('./pages/starting/starting.module').then( m => m.StartingPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./pages/recover-password/recover-password.module').then(m => m.RecoverPasswordPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'corte-caja',
    loadChildren: () => import('./pages/corte-caja/corte-caja.module').then( m => m.CorteCajaPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notes-list/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'create-note',
    loadChildren: () => import('./pages/create-note/create-note.module').then( m => m.CreateNotePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
