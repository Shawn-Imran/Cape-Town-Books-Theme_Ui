import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slideMenu = false;
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

  slideMenuActive() {
    this.slideMenu = true;
  }
  slideMenuInactive() {
    this.slideMenu = false;
  }
}
