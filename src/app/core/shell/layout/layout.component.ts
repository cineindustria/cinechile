import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .container__info_column {
      background-color: #343a40;
    }
  `]
})
export class LayoutComponent implements OnInit {

  constructor(
    translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }

}
