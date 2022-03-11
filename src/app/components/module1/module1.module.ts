import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './mainpage/mainpage.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {TableModule} from 'primeng/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    HomepageComponent,
    MainpageComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    Module1RoutingModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    TableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    HomepageComponent,
    MainpageComponent
  ]
})
export class Module1Module { }
