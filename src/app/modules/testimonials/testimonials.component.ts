
import { Component, AfterViewInit } from '@angular/core';
declare var bootstrap: any;
declare var $: any;

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements AfterViewInit {
  ngAfterViewInit() {
    const multipleCardCarousel = document.querySelector("#carouselExampleControls");
    if (window.matchMedia("(min-width: 576px)").matches) {
      const carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false
      });
      const carouselWidth = $(".carousel-inner")[0].scrollWidth;
      const cardWidth = $(".carousel-item").width();
      let scrollPosition = 0;
      $("#carouselExampleControls .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 3) {
          scrollPosition += cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      });
      $("#carouselExampleControls .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      });
    } else {
      $(multipleCardCarousel).addClass("slide");
    }
  }
}
