import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  flag=true;
  products=[
    {
      code:12,
      name:'demo',
      category:'demo category',
      quantity:12,
      company:"demo"
    },
    {
      code:12,
      name:'demo',
      category:'demo category',
      quantity:12,
      company:"demo"
    },
    {
      code:12,
      name:'demo',
      category:'demo category',
      quantity:12,
      company:"demo"
    },
    {
      code:12,
      name:'demo',
      category:'demo category',
      quantity:12,
      company:"demo"
    }
  ]
 // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor() { }

  ngOnInit(): void {
  }
  onclose()
  {
    console.log("close")
  }

  onexpand(event)
  {
    console.log(event)
  }
  // hello()
  // {
  //   console.log("hello clicked")
  // }
}
