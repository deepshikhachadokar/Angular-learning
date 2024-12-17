import { Routes } from '@angular/router';
import { DataBindingComponent } from '../container/topics/data-binding/data-binding.component';
import { OneWayComponent } from '../container/topics/one-way/one-way.component';

export const routes: Routes = [
  {
    path:'data-binding',
    component:DataBindingComponent
  },
  {
    path:'',
    redirectTo:'/data-binding',
    pathMatch:'full'
  },
  {
    path:'/one-way',
    component:OneWayComponent,
    pathMatch:'full'
    
  }
];
