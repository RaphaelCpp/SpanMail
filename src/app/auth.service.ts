import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 


  public utilisateur$:BehaviorSubject<Iuser[]>;


  
  private utilisateur:  Iuser[]=  
  [
    {
      username: "Raphael@hotmail.fr",
      password: "password01"
    }
  ];

  constructor() { 
    this.utilisateur$ = new BehaviorSubject<Iuser[]>(this.utilisateur);
  }

}
