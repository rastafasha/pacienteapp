import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayFilterPipe } from './array-filter.pipe';
import { FilterAppointmentDatePipe } from './filter-appointment-date.pipe';



@NgModule({
  declarations: [
    ArrayFilterPipe,
    FilterAppointmentDatePipe

  ],
  exports: [
    ArrayFilterPipe,
    FilterAppointmentDatePipe

  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
