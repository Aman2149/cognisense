import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '../article.service';



@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrl: './article-content.component.scss'
})
export class ArticleContentComponent {
  article: any;



  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }



  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
if(id){
  this.articleService.getArticleById(id).subscribe(article => {

    this.article = article;

  });

}
  
  }
}
