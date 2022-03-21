import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailComponent } from './component/mail/mail.component';
import { SliderComponent } from './component/slider/slider.component';
import { HeaderComponent } from './component/static/header/header.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { FinalHeaderComponent } from './component/final-header/final-header.component';

@NgModule({
  declarations: [AppComponent, MailComponent, SliderComponent, HeaderComponent, NotfoundComponent, FinalHeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
