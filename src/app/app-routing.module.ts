import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { HeaderComponent } from './modules/header/header.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { ArticleContentComponent } from './modules/article-content/article-content.component';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleContentComponent },
  { path: 'contact', component: ContactComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
