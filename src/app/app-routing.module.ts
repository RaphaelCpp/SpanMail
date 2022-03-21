import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'/subscription', component:SubscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
