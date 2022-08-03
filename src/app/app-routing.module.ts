import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlannerComponent} from "./pages/planner/planner.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {RegistrationComponent} from "./pages/registration/registration.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'planner',
    pathMatch: 'full'
  },
  {
    path: 'planner',
    component: PlannerComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
