import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { WorkshopModule } from './workshop/workshop.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule, MatIconModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { MenuComponent } from '../app/apex/menu/menu.component';
import { ApexService } from './shared/service/apex.service';
import { SharedModule } from './shared/shared.module';
//import { provide } from '@angular/core';
import { BrowserXhr } from '@angular/http';
// import {CustExtBrowserXhrService} from './cust-ext-browser-xhr.service';
@NgModule({
  declarations: [
    AppComponent, MenuComponent
  ],
  imports: [
    BrowserModule, AuthModule, WorkshopModule, RouterModule, BrowserAnimationsModule, HttpClientModule, MatSidenavModule, MatIconModule, MatListModule,     SharedModule.forRoot()

  ],
  providers: [ApexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
