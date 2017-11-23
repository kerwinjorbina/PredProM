import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PaperComponent } from './paper/paper.component';
import { BooleanEncodeComponent } from './encode/booleanencode.component';
import { FrequencyEncodeComponent } from './encode/frequencyencode.component';
import { SimpleEncodeComponent } from './encode/simpleencode.component';
import { PayloadEncodeComponent } from './encode/payloadencode.component';
import { ComplexEncodeComponent } from './encode/complexencode.component';

const routes: Routes =[
    //{ path: 'dashboard',      component: HomeComponent },
    { path: 'about',            component: PaperComponent },
    { path: 'encode/boolean',   component: BooleanEncodeComponent },
    { path: 'encode/frequency', component: FrequencyEncodeComponent },
    { path: 'encode/simple',    component: SimpleEncodeComponent },
    { path: 'encode/payload',   component: PayloadEncodeComponent },
    { path: 'encode/complex',   component: ComplexEncodeComponent },

    { path: '',   redirectTo: 'about', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
