import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { PageNotFound } from './PageNotFound';
import { AirLinesComponent } from './AirLinesComponent';
import { LoginComponent } from './LoginComponent';
import { FlightDetails } from './FlightDetails';
import { AirLineService } from './AirLineService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AirLinesComponent,
    
    FlightDetails,
    PageNotFound
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'login',component:LoginComponent},
      {path:'airlines',component:AirLinesComponent,
      children: [
        {path:':id',component:FlightDetails}]
      },
      {path:'**',component:PageNotFound}
      
    ]),
  ],
  providers: [AirLineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
