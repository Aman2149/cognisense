import { Component,ElementRef, HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    console.log('Click detected');
    if (!this.el.nativeElement.contains(event.target)) {
      console.log('Clicked outside of navbar');
      const navbarCollapse = this.el.nativeElement.querySelector('.navbar-collapse');
      const navbarToggler = this.el.nativeElement.querySelector('#navbar-toggler-btn');
      
      if (navbarCollapse.classList.contains('show') && event.target !== navbarToggler) {
        console.log('Closing navbar');
        navbarCollapse.classList.remove('show');
      }
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
