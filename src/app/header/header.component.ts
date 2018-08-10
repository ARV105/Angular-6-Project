import { Component, OnInit, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // host: {
  //   '(window:scroll)': 'onScroll($event)'
  // }
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  onScroll(evt) {
    /**
     * BAD BAD way to do this
     * window object can be wrapped as a service
     * and then be imported here
    */
    this.currPos = (window.pageYOffset || evt.target.scrollTop)  - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
}
  ngOnInit() {
  }

}
