import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../core/auth.guard';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages.component';
import { CreationComponent } from './creation/creation.component';

const routes: Routes = [
  { path: '', component: PagesComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListComponent, canActivate: [ AuthenticationGuard ] },
      { path: 'detail/:id', component: DetailComponent, canActivate: [ AuthenticationGuard ] },
      { path: 'creation', component: CreationComponent, canActivate: [ AuthenticationGuard ] },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
