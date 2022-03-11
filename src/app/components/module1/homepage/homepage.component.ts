import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
this._router.navigate(['/main']);
  }

  
}
