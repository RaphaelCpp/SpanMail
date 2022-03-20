import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      $('.myLiNav').on('click', function () {
        $('.myLiNav').each(function () {
          if ($('#collapse1').hasClass('show')) {
            $('.mycollaspe1').removeClass('show');
          }
          if ($('#collapse2').hasClass('show')) {
            $('.mycollaspe2').removeClass('show');
          }
          if ($('#collapse3').hasClass('show')) {
            $('.mycollaspe3').removeClass('show');
          }
          if ($('#collapse4').hasClass('show')) {
            $('.mycollaspe4').removeClass('show');
          }
        });
      });
    });
  }
}
