import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/iuser';
import { AuthService } from '../../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent implements OnInit {
  numbers: number[];
  user!: Iuser[];

  AuthSubscription!: Subscription;

  constructor(private AuthService: AuthService) {
    this.numbers = Array(15)
      .fill(0)
      .map((x, i) => i);
  }

  ngOnInit(): void {
    this.AuthSubscription = this.AuthService.utilisateur$.subscribe(
      (utilisateur: Iuser[]) => {
        this.user = utilisateur;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.AuthSubscription) {
      this.AuthSubscription.unsubscribe();
    }
  }
}
