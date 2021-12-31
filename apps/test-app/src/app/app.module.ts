import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StepsComponent } from './steps/steps.component';

@NgModule({
  declarations: [AppComponent, StepsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [StepsComponent],
})
export class AppModule {}
