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
      $('#close').on('click', function () {
        if ($('.collaspeGen1').hasClass('show')) {
          $('.collaspeGen1').removeClass('show');
        }
      });

      $('#close2').on('click', function () {
        if ($('.collaspeGen2 ').hasClass('show')) {
          $('.collaspeGen2 ').removeClass('show');
        }
      });

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

      $('.btn').on('click', function () {
        $('.btn').each(function () {
          if ($('#multiCollapseExample1').hasClass('show')) {
            $('#multiCollapseExample1').removeClass('show');
          }
          if ($('#multiCollapseExample2').hasClass('show')) {
            $('#multiCollapseExample2').removeClass('show');
          }
          if ($('#multiCollapseExample3').hasClass('show')) {
            $('#multiCollapseExample3').removeClass('show');
          }
          if ($('#multiCollapseExample4').hasClass('show')) {
            $('#multiCollapseExample4').removeClass('show');
          }
        });
      });
    });
  }
}
