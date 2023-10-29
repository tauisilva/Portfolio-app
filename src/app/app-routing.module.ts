import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full',
  },
  {
    path: 'main', loadChildren: () => import('./main/main-routing.module').then(m => m.MainRoutingModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
  },
  {
    path: 'login', component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
