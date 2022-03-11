import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [

{

  path:"",
  component:HomepageComponent,
  children:[

  {
    path:'main',
    component:MainpageComponent
  }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
