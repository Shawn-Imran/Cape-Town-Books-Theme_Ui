import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderModule } from '../core/header/header.module';
import { MenuModule } from '../core/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule
  ]
})
export class PagesModule { }
