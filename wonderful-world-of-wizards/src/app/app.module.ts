import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { AppRoutingModule } from './/app-routing.module';
import { ButtonLinkComponent } from './button-link/button-link.component';
import { NewAccountScreenComponent } from './new-account-screen/new-account-screen.component';
import { AccountService } from './account.service';


@NgModule({
  declarations: [
    AppComponent,
    TitleScreenComponent,
    ButtonLinkComponent,
    NewAccountScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
