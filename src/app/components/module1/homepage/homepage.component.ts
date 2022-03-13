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
 showContent(){
  event.preventDefault()
  var header = document.getElementById("w3-bar");
  console.log(header)
    var btns = header.getElementsByClassName("w3-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
  }
  
}
