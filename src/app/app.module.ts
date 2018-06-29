import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { WorkshopModule } from './workshop/workshop.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/Http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AuthModule, WorkshopModule, RouterModule, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
