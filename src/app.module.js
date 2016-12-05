import { NgModule,LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//import "moment/locale/nl";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: LOCALE_ID, useValue: "nl-NL" }

  ]
})
export class AppModule {

}
