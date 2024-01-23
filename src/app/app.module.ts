import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxRmCustomCssModule } from 'ngx-rm-custom-css';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxRmCustomCssModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
