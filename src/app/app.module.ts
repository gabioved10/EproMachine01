import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MachinesComponent } from './machines/machines.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
// import { AppRoutingComponent } from './app-routing/app-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    MachinesComponent,
    NavComponent,
    DetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    NbCardModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
