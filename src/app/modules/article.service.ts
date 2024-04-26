import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';



@Injectable({

  providedIn: 'root'

})

export class ArticleService {

  articles = [

    { id: 1, title: 'Article 1', content: 'Content of Article 1' },

    { id: 2, title: 'Article 2', content: 'Content of Article 2' },

  

  ];



  constructor() { }



  getArticleById(id: string): Observable<any> {

    return of(this.articles.find(article => article.id === +id));

  }
  getAllArticles(): Observable<any> {

    return of(this.articles);

  }

}