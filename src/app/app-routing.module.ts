import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadScenrioComponent } from './different-scenrioes/read-scenrio/read-scenrio.component';
import { WriteScenrioComponent } from './different-scenrioes/write-scenrio/write-scenrio.component';
import { WrongAddressComponent } from './different-scenrioes/wrong-address/wrong-address.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/read'},
  {path:'read',component:ReadScenrioComponent},
  {path:'write',component:WriteScenrioComponent},
  {path:'wrongAddress',component:WrongAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
