import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposersComponent } from './composers/composers.component';
import { LoginComponent } from './login/login.component';
import { OperaItemComponent } from './opera-item/opera-item.component';
import { OperasComponent } from './operas/operas.component';
import { NewOperaFormComponent } from './new-opera-form/new-opera-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'operas', pathMatch: 'full' },
  { path: 'operas', component: OperasComponent },
  { path: 'composers', component: ComposersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'operas/:id', component: OperaItemComponent },
  { path: 'new', component: NewOperaFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
