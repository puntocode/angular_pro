import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './pages/nopage-found/nopage-found.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: '**', component: NopageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
