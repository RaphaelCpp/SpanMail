import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './component/mail/mail.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SliderComponent } from './component/slider/slider.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', component: SliderComponent},
  { path: 'login', component: LoginComponent},
  { path: 'mail', component: MailComponent},
  { path: '**', pathMatch:'full' ,component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
