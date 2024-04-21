import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {
  @ViewChild('section') section!: ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.section.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top >= 0 && rect.bottom <= windowHeight) {
      this.renderer.addClass(this.section.nativeElement, 'jump');
    } else {
      this.renderer.removeClass(this.section.nativeElement, 'jump');
    }
  }
}
