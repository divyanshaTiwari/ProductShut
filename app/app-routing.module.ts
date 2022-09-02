import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminComponent } from './AdminLogin/admin.component';
import { HomepageComponent } from './customer-homepage/homepage.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path :'customerHomePage', component:HomepageComponent},
  {path: 'adminLogin', component: AdminComponent},
  {path : 'adminHomePage', component : AdminHomePageComponent},
  {path : 'customerDashboard', component : CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
