import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  items: MenuItem[];
  serStyle = 'nsw1';
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this._router.navigate(['/main']);
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
    ];
  }

  showContent() {
    event.preventDefault();
    var header = document.getElementById('w3-bar');
    var btns = header.getElementsByClassName('w3-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
  }
  submit() {
    console.log('working');
    if (this.serStyle === 'nsw1') {
      this.serStyle = 'nsw';
      console.log(this.serStyle);
    } else {
      this.serStyle = 'nsw1';
    }
  }
  Homecontent() {}

  Integrationcontent() {}
  Crmcontent() {}
}
