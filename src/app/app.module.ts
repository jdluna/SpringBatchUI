import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { SpecialrulesComponent } from './specialrules/specialrules.component';
import { HouseholdComponent } from './household/household.component';
import { TextMaskModule } from 'angular2-text-mask';
import { Services } from './app.services';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ErrorpageComponent,
    SpecialrulesComponent,
    HouseholdComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    routing,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    ToasterModule.forRoot()

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
