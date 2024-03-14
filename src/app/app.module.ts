import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './common/interceptors/token.interceptor';
import { ApikeyInterceptor } from './common/interceptors/apikey.interceptor';
import { LoadingInterceptor } from './common/interceptors/loading.interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
       multi: true },
   {
     provide: HTTP_INTERCEPTORS,
     useClass: ApikeyInterceptor,
     multi: true
   },
   {
     provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptor,
     multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
