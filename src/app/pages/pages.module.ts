import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ListComponent } from './list/list.component';
import { CreationComponent } from './creation/creation.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from '../components/header/header.component';
import { AuthenticationGuard } from '../core/auth.guard';


@NgModule({
  declarations: [
    PagesComponent,
    ListComponent,
    CreationComponent,
    LoginComponent,
    DetailComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PagesRoutingModule
  ],
  providers: [ AuthenticationGuard ]
})
export class PagesModule { }
