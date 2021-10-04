import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MachinesComponent } from './machines/machines.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NextProductComponent } from './next-product/next-product.component';


// import { AppRoutingComponent } from './app-routing/app-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    MachinesComponent,
    NavComponent,
    DetailsComponent,
    NextProductComponent,
  ],
  imports: [
    AppRoutingModule,
  
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
