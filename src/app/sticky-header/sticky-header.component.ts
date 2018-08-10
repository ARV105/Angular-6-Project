import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.css']
})
export class StickyHeaderComponent implements OnInit {
  isShrunk: boolean = false;

  constructor(zone: NgZone) {
    window.onscroll = () => {
      zone.run(() => {
        if(window.pageYOffset > 0) {
             this.isShrunk = true;
        } else {
             this.isShrunk = false;
        }
      });
    };
  }

  ngOnInit() {
  }

}
