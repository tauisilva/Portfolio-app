import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { EditTextsComponent } from './edit-texts/edit-texts.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: HomeAdminComponent },
      { path: 'home-admin', component: HomeAdminComponent },
      { path: 'edit', component: EditTextsComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
