import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Camera } from './camera/camera';
import { ItemDetails } from './item-details/item-details';
import { Confirmation } from './confirmation/confirmation';

const routes: Routes = [
  { path: '', redirectTo: '/camera', pathMatch: 'full' },
  { path: 'camera', component: Camera },
  { path: 'details', component: ItemDetails },
  { path: 'confirmation', component: Confirmation }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }