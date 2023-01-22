import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiefGuardComponent } from '../webpages/chief-guard/chief-guard.component';

const routes: Routes = [
  {
    path:'', component: ChiefGuardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
