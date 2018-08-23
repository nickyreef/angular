import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TotoComponent } from './toto/toto.component';
import { UserItemComponent } from './user-item/user-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TotoComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
