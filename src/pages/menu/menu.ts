import { Component, ViewChild } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';

//pages
import { HomePage } from '../home/home';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  nav: Nav

  public list: string[] = [
    'al-jazeera-english',
    'ars-technica',
    'associated-press',
    'bbc-news',
    'bloomberg',
    'breitbart-news',
    'business-insider',
    'buzzfeed',
    'cnbc',
    'cnn',
    'daily-mail',
    'financial-times',
    'fortune',
    'four-four-two',
    'hacker-news',
    'ign',
    'independent',
    'mashable',
    'newsweek',
    'new-york-magazine',
    'reddit-r-all',
    'reuters',
    'techcrunch',
    'usa-today',
    'time'
  ];

  constructor(nav: Nav) {
    this.nav = nav;
   }

  openSource(item) {
    this.nav.push(HomePage, {source: item});
  }

}