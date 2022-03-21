import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path:'login',component:LoginComponent},
  {path:'subscription', component:SubscriptionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
