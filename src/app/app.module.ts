import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposersComponent } from './composers/composers.component';
import { OperasComponent } from './operas/operas.component';
import { OperaItemComponent } from './opera-item/opera-item.component';
import { NewOperaFormComponent } from './new-opera-form/new-opera-form.component';
import { LoginComponent } from './login/login.component';
import { ComposerDetailComponent } from './composer-detail/composer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposersComponent,
    OperasComponent,
    OperaItemComponent,
    NewOperaFormComponent,
    LoginComponent,
    ComposerDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
