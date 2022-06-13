import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FooterModule

  ],
  exports: [

  ],
  declarations: [
  ],
  providers: [],
  entryComponents: []
})
export class SharedModule { }
