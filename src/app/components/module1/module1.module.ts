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
import {MatTabsModule} from '@angular/material/tabs';
import {TabMenuModule} from 'primeng/tabmenu';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {ScrollPanelModule} from 'primeng/scrollpanel';
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
    MatIconModule,
    MatTabsModule,
    TabMenuModule,
    MultiSelectModule,
    FormsModule,
    MatSelectModule,
    RadioButtonModule,
    DropdownModule,
    ScrollPanelModule
  ],
  exports: [
    HomepageComponent,
    MainpageComponent
  ]
})
export class Module1Module { }
