import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import model for news

import { Config } from '../../app/config/config';
import { Observable } from 'rxjs/Rx';

//required rxjs functions
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService {

  private baseUrl = 'https://newsapi.org/v1/articles'; 


  constructor (private http: Http) { }

  getArticles(source, sortBy: string) {
    let params = {
      source: source,
      sortBy: sortBy,
      apiKey: Config.newsKey
    }

    /*return Observable.interval(2000) 
        .switchMap(() => this.http.get(this.baseUrl, {params: params}));*/
    return this.http.get(this.baseUrl, {params: params});
  }

}

