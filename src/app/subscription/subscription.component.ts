import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  none !:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  
  CheckStrengthPassword(password: any) {


    var password_strength = document.getElementById("password-text");
    
    //TextBox left blank.
     if (password.length == 0) {
      password_strength!.innerHTML = "";
      
      this.Nope();
      return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push('[A-Z]'); //Uppercase Alphabet.
    regex.push('[a-z]'); //Lowercase Alphabet.
    regex.push('[0-9]'); //Digit.
    regex.push('[$@$!%*#?&]'); //Special Character.
   var passed = 0;

    //Validate for each Regular Expression.
   for (var i = 0; i < regex.length; i++) {
      if (new RegExp(regex[i]).test(password.target.value)) {
        passed++;
      }
    }
    //Display status.
    var strength = "";
    switch (passed) {
      case 0:
        strength = "<small class='progress-bar bg-danger mt-2' style='width: 40%; border-radius: 15px '>Le mot de passe doit être plus Strong</small>";
        this.Nope();
        break;
      case 1:
        strength = "<small class='progress-bar bg-danger mt-2' style='width: 40%;border-radius: 15px '>Le mot de passe doit être plus Strong</small>";
        this.Nope();
        break;
      case 2:
        strength = "<small class='progress-bar bg-danger mt-2' style='width: 40%;border-radius: 15px '>Weak</small>";
        this.Nope();
        break;
      case 3:
        strength = "<small class='progress-bar bg-warning mt-2' style='width: 60%;border-radius: 15px '>Medium</small>";
        this.Nope();
        break;
      case 4:
        strength = "<small class='progress-bar bg-success mt-2' style='width: 100%; border-radius: 15px '>Strong</small>";
        break;

    }
    password_strength!.innerHTML = strength;

  }


  Nope() : boolean{
    var password_strength = document.getElementById("password-text");

    if (password_strength?.innerText == "Weak"|| password_strength?.innerText==""|| password_strength?.innerText == "Le mot de passe doit être plus Strong") {
      this.none = false;
    } else {
      this.none = true;
    }
    return this.none;
  }

}
