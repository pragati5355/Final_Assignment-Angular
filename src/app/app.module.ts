import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CancelComponent } from './cancel/cancel.component';
import { SucessComponent } from './sucess/sucess.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    CancelComponent,
    SucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
