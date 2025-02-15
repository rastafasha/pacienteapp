import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAppointmentDate'
})
export class FilterAppointmentDatePipe implements PipeTransform {

    transform(appointments: any[]): any {
        // Validate input
        if (!appointments || !Array.isArray(appointments)) {
          return null;
        }
    
        // Filter appointments with appointment_attention
        const filtered = appointments.filter(app => app.appointment_attention !== null);
    
        // Sort by date_appointment in descending order
        filtered.sort((a, b) => {
          const dateA = new Date(a.date_appointment).getTime();
          const dateB = new Date(b.date_appointment).getTime();
          return dateB - dateA;
        });
    
        // Return the latest appointment or null if none found
        return filtered.length > 0 ? filtered[0] : null;
      }

}
