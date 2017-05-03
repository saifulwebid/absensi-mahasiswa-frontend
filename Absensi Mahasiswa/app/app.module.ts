import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { ProductService} from './_services/product.service';


//fakebackend 
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

//authentication
import { AlertComponent } from './_directive/alert.component';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,

  ],
   providers: [
    ProductService , 

  ],
  bootstrap: [ AppComponent ]
})



export class AppModule { }
