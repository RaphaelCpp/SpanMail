import { Component, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router, Routes } from '@angular/router';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  user !: Iuser[];

  

  username !: string
  password !: string


  AuthSubscription !: Subscription;
  

  constructor(private AuthService : AuthService, private router : Router) { 
    
  }

  ngOnInit(): void {
    this.AuthSubscription = this.AuthService.utilisateur$.subscribe((utilisateur:Iuser[]) =>{
      this.user = utilisateur;  
    });
  }

  ngOnDestroy(): void {
    if (this.AuthSubscription) {
      this.AuthSubscription.unsubscribe();
    }
  }


  login(): void {
    if ( this.username == this.user[0]['username'] && this.password == this.user[0]['password'] ) {
      this.router.navigate(['/subscription'])
    } else {
      this.router.navigate(['subscription']);
    }
  }
}