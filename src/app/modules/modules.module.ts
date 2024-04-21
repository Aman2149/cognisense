import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeContentComponent } from './home-content/home-content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    HomeContentComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    NzGridModule
  ],
  exports: [
    HeaderComponent,
    HomeContentComponent,
    HomeComponent
  ]
})
export class ModulesModule { }
