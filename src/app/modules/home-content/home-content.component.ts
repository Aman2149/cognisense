import { NgFor } from '@angular/common';
import { Component,  Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss'],
 
 
})
export class HomeContentComponent {
 
  
  constructor(private renderer: Renderer2) {}
  slides = [
    { src: '../../../assets/bull.png', alt: 'Image 1' },
    { src: '../../../assets/bile-hand.png', alt: 'Image 2' },
    { src: '../../../assets/buysell.jpg', alt: 'Image 3' }
  ];

}
