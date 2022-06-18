import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  isOpen = false;
  catSlide = false;
  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
    this.catSlide = true;
  }
  catSlideInactive() {
    this.catSlide = false;
  }
}
