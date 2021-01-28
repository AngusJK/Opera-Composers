import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposersComponent } from './composers/composers.component';
import { OperasComponent } from './operas/operas.component';
import { OperaItemComponent } from './opera-item/opera-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposersComponent,
    OperasComponent,
    OperaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
