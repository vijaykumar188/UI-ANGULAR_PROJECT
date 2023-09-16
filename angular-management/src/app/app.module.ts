import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuTableComponent } from './Re-usable-components/ru-table/ru-table.component';
import { RuBannerComponent } from './Re-usable-components/ru-banner/ru-banner.component';
import { RuTabComponent } from './Re-usable-components/ru-tab/ru-tab.component';
import { RuPaginationComponent } from './Re-usable-components/ru-pagination/ru-pagination.component';
import { RuSearchInputComponent } from './Re-usable-components/ru-search-input/ru-search-input.component';
import { LoginComponent } from './common-components/login/login.component';
import { SignUpComponent } from './common-components/sign-up/sign-up.component';
import { DashboardComponent } from './common-components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RuTableComponent,
    RuBannerComponent,
    RuTabComponent,
    RuPaginationComponent,
    RuSearchInputComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
