import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './pipe/order-by.pipe';
import { TextFilterPipe } from './pipe/text-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    OrderByPipe,
    TextFilterPipe
  ],
  exports: [
    FormsModule,
    OrderByPipe,
    TextFilterPipe,
  ]
})
export class SharedModule { }
