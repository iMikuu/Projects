import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'body', component: BodyComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/body', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
