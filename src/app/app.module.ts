import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PaperComponent } from './paper/paper.component';
import { BooleanEncodeComponent } from './encode/booleanencode.component';
import { FrequencyEncodeComponent } from './encode/frequencyencode.component';
import { SimpleEncodeComponent } from './encode/simpleencode.component';
import { PayloadEncodeComponent } from './encode/payloadencode.component';
import { ComplexEncodeComponent } from './encode/complexencode.component';
import { LogDataComponent } from './encode/logdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaperComponent,
    BooleanEncodeComponent,
    FrequencyEncodeComponent,
    SimpleEncodeComponent,
    PayloadEncodeComponent,
    ComplexEncodeComponent,
    LogDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
