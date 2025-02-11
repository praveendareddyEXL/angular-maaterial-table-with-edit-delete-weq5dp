import './polyfills';

import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
   MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableSortingExample} from './app/table-sorting-example';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  exports: [
   MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatTooltipModule,
    MatSortModule,
    MatPaginatorModule
     
  ]
})
export class DemoMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DemoMaterialModule,
    ReactiveFormsModule,
     MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatTooltipModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [TableSortingExample],
  declarations: [TableSortingExample],
  bootstrap: [TableSortingExample],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */