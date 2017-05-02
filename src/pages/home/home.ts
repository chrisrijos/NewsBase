import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsService } from '../../services/NewsService/news-service';
import { Article } from '../../models/Article.model';
import { Location } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

  public articles = [];

  constructor(public navCtrl: NavController, newsService: NewsService, location: Location) {
    this.list.forEach( (source) => {
      newsService.getArticles(source, 'top').subscribe(res => {
        this.articles.push(new Article(source, res.json()))
      });
    });
    this.articles = this.articles.sort();
  }

  resolveArticle(url) {
    location.href = url;
    return false;
  }

}
