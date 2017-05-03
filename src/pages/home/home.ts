import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { NewsService } from '../../services/NewsService/news-service';
import { Article } from '../../models/Article.model';
import { Location } from '@angular/common';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public articles = [];
  public source: any;

  constructor(
   public platform: Platform,
   public navCtrl: NavController,
   public newsService: NewsService,
   public location: Location,
   public params: NavParams) {

    this.source = params.get('source'); 
    newsService.getArticles(this.source, 'top').subscribe(res => {
      this.articles.push(new Article(this.source, res.json()))
    });
  }

  resolveArticle(url) {
    this.platform.ready().then(() => {
      let browser = new InAppBrowser(url,'_blank');
    });
    return false;
  }

}
