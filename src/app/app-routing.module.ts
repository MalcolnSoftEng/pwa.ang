import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BluetoothComponent } from './views/bluetooth/bluetooth.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"bluetooth",
    component: BluetoothComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
