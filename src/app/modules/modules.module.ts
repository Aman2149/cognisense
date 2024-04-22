import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule, Routes } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeContentComponent } from './home-content/home-content.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    HomeContentComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    NzButtonModule,
    NzMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    NzGridModule,
   
  ],
  exports: [
    HeaderComponent,
    HomeContentComponent,
    HomeComponent,
    AboutComponent,
    RouterModule,
    FooterComponent
    
  ]
})
export class ModulesModule { }
