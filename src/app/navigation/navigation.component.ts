import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  links = [
    {
      route:'home',
      dispText:'Home'
    },
    {
      route:'activities',
      dispText:'Activities'
    },
    {
      route:'awards',
      dispText:'Awards'
    },
    {
      route:'resume',
      dispText:'Resume'
    },
    {
      route:'work',
      dispText:'Work'
    }
  ]

  ngOnInit(): void {
  }

}
