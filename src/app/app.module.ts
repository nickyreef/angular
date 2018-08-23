import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TotoComponent } from './toto/toto.component';
import { UserItemComponent } from './user-item/user-item.component';
import { TruncateDirective } from './truncate.directive';


@NgModule({
  declarations: [
    AppComponent,
    TotoComponent,
    UserItemComponent,
    TruncateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
