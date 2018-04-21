import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { AppRoutingModule } from './/app-routing.module';
import { ButtonLinkComponent } from './button-link/button-link.component';
import { NewAccountScreenComponent } from './new-account-screen/new-account-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleScreenComponent,
    ButtonLinkComponent,
    NewAccountScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
