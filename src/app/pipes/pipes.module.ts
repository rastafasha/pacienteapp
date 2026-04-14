import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayFilterPipe } from './array-filter.pipe';
import { FilterAppointmentDatePipe } from './filter-appointment-date.pipe';
import { ImagenPipe } from './imagen.pipe';



@NgModule({
  declarations: [
    ArrayFilterPipe,
    FilterAppointmentDatePipe,
    ImagenPipe

  ],
  exports: [
    ArrayFilterPipe,
    FilterAppointmentDatePipe,
    ImagenPipe

  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
