import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MachinesComponent } from './machines/machines.component';

const routes: Routes = [ 
  {path: 'Machines',component: MachinesComponent},
  {path: 'Details',component: DetailsComponent},
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
