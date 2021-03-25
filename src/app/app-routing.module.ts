import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposersComponent } from './composers/composers.component';
import { LoginComponent } from './login/login.component';
import { OperaItemComponent } from './opera-item/opera-item.component';
import { OperasComponent } from './operas/operas.component';
import { NewOperaFormComponent } from './new-opera-form/new-opera-form.component';
import { ComposerDetailComponent } from './composer-detail/composer-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/operas', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new', component: NewOperaFormComponent },
  { path: 'operas', component: OperasComponent },
  { path: 'operas/:id', component: OperaItemComponent },
  { path: 'composers', component: ComposersComponent },
  { path: 'composers/:id', component: ComposerDetailComponent },
  { path: "**", redirectTo: 'operas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
