import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from 'src/app/views/login/login.component';
import { RegisterComponent } from 'src/app/views/register/register.component';

const routes: Routes = [

{

  path:"",
  component:HomepageComponent,
  children:[

  {
    path:'main',
    component:MainpageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
