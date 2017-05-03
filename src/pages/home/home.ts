import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../services/NewsService/news-service';
import { Article } from '../../models/Article.model';
import { Location } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public articles = [];
  public source: any;

  constructor(public navCtrl: NavController, newsService: NewsService, location: Location, params: NavParams) {
    this.source = params.get('source'); 
    newsService.getArticles(this.source, 'top').subscribe(res => {
      this.articles.push(new Article(this.source, res.json()))
    });
  }

  resolveArticle(url) {
    location.href = url;
    return false;
  }

}
