import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './component/mail/mail.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SliderComponent } from './component/slider/slider.component';

const routes: Routes = [
  { path: '', component: SliderComponent},
  { path: 'login', component: MailComponent},
  { path: 'mail', component: MailComponent},
  { path: '**', pathMatch:'full' ,component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
