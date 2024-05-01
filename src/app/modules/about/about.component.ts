import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: black;
        margin-bottom: 0;
        user-select: none;
      }
    `
  ]
})
export class AboutComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
