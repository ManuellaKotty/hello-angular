import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnappedComponent } from './face-snapped/face-snapped.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnappedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
