import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent implements OnInit {
  numbers: number[];
  constructor() {
    this.numbers = Array(15)
      .fill(0)
      .map((x, i) => i);
  }

  ngOnInit(): void {}
}
