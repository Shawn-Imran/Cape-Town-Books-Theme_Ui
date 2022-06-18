import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
