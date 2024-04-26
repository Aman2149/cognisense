import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  articles!: any[];



  constructor(private articleService: ArticleService) { }



  ngOnInit(): void {

   

    this.articleService.getAllArticles().subscribe(articles => {

      this.articles = articles;

    });

  }
}
