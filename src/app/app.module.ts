import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputFormExample } from './LoginAdmin/LoginAdmin.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertModule } from 'ng2-bootstrap';

import {MdButtonModule , MdCardModule , MdMenuModule , MdToolbarModule , MdIconModule , MdInputModule , MdDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InputFormExample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule , 
    BrowserAnimationsModule,
    MdButtonModule , 
    MdCardModule ,
    MdMenuModule , 
    MdToolbarModule , 
    MdIconModule ,
    MdInputModule ,
    MdDialogModule, 
    AlertModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
