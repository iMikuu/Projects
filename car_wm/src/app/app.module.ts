import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    CarsPageComponent,
    AccountPageComponent,
    AdminPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: 'cars', component: CarsPageComponent },
      { path: 'account', component: AccountPageComponent },
      { path: 'admin', component: AdminPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: ErrorPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
