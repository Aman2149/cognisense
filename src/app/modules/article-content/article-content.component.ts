import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from '../article.service';



@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrl: './article-content.component.scss'
})
export class ArticleContentComponent {
  article: any;



  constructor(private route: ActivatedRoute, private articleService: ArticleService,private router: Router) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
if(id){
  this.articleService.getArticleById(id).subscribe(article => {

    this.article = article;

  });

}
  
  }
  copyUrl() {
    const url = window.location.href;

    
    const input = document.createElement('input');
    input.value = url;

    
    document.body.appendChild(input);

   
    input.select();

 
    document.execCommand('copy');

   
    document.body.removeChild(input);

    
    alert('URL copied , share it !');
  }
  goToArticles(): void {
    this.router.navigate(['/articles']);
  }
}
