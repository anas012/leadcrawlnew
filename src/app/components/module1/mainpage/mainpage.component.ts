import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  events: string[] = [];
  opened = true;
  flag = true;
  selectedrangevalue;
  selectedlocation = 'Region';
  cities = [];
  itemss: MenuItem[];
  iscompany;
  selectedCities3;
  activeItem: MenuItem;
  selectedradius;
  selectedEmployeeRange = 'Predefined';
  region = true;
  Isrange = true;
  radius = [];
  range = [];
  expanded;
  companies = [];
  filters = [];
  products = [
    {
      code: 12,
      name: 'demo',
      category: 'demo category',
      quantity: 12,
      company: 'demo',
    },
    {
      code: 12,
      name: 'demo',
      category: 'demo category',
      quantity: 12,
      company: 'demo',
    },
    {
      code: 12,
      name: 'demo',
      category: 'demo category',
      quantity: 12,
      company: 'demo',
    },
    {
      code: 12,
      name: 'demo',
      category: 'demo category',
      quantity: 12,
      company: 'demo',
    },
  ];

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor() {}

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.radius = [
      { name: 'within 25 miles', code: 'NY' },
      { name: 'within 23 miles', code: 'RM' },
      { name: 'within 78 miles', code: 'LDN' },
      { name: 'within 45 miles', code: 'IST' },
      { name: 'within 50 miles', code: 'PRS' },
    ];
    this.range = [
      { name: '1-50', code: 'NY' },
      { name: '50-100', code: 'RM' },
      { name: '100-150', code: 'LDN' },
      { name: '150-200', code: 'IST' },
      { name: '200-250', code: 'PRS' },
    ];
    this.companies = [
      { name: 'IBM', code: 'NY' },
      { name: 'MICROSOFT', code: 'RM' },
      { name: 'APPLE', code: 'LDN' },
      { name: 'AMAZON', code: 'IST' },
      { name: 'HUAWEI', code: 'PRS' },
    ];
    this.itemss = [
      { label: 'People', icon: 'pi pi-users' },
      { label: 'Companies', icon: 'pi pi-book' },
      { label: 'List', icon: 'pi pi-list' },
    ];

    this.activeItem = this.itemss[0];

    this.filters = [
      {
        Name: 'Name',
        expanded: 'close',
      },
      {
        Name: 'Job title',
        expanded: 'close',
      },
      {
        Name: 'Company',
        expanded: 'close',
      },
      {
        Name: 'Locations',
        expanded: 'close',
      },
      {
        Name: 'Employees',
        expanded: 'close',
      },
      {
        Name: 'Industry',
        expanded: 'close',
      },
      {
        Name: 'Technologies',
        expanded: 'close',
      },
      {
        Name: 'Revenue',
        expanded: 'close',
      },
      {
        Name: 'Funding',
        expanded: 'close',
      },
      {
        Name: 'Job Posting',
        expanded: 'close',
      },
    ];
  }
  onclose(event) {
    this.filters[event].expanded = 'close';
  }

  onexpand(event) {
    this.filters[event].expanded = 'open';
  }

  // hello()
  // {
  //   console.log("hello clicked")
  // }

  checklocation() {
    if (this.selectedlocation == 'Region') {
      this.region = true;
    } else {
      this.region = false;
    }
  }

  checkemployees() {
    if (this.selectedEmployeeRange == 'Predefined') {
      this.Isrange = true;
    } else {
      this.Isrange = false;
    }
  }
}
