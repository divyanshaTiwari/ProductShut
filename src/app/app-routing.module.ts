import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminComponent } from './AdminLogin/admin.component';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path : 'adminHomePage', component : AdminHomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
