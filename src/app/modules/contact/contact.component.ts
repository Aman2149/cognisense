import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor() { }

  focusFunc(event: any) {
    let parent = event.target.parentNode;
    parent.classList.add("focus");
  }

  blurFunc(event: any) {
    let parent = event.target.parentNode;
    if (event.target.value == "") {
      parent.classList.remove("focus");
    }
  }
}
