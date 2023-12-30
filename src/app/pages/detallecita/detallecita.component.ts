import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, delay } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detallecita',
  templateUrl: './detallecita.component.html',
  styleUrls: ['./detallecita.component.css']
})
export class DetallecitaComponent implements OnInit {
  loading:boolean;
  obs$ = of(1).pipe(delay(500));
  
  appointment_id:any;
  patient:any;
  user:any;

  appointment:any;
  appointments:any;
  num_appointment:any;
  money_of_appointments:any;
  num_appointment_pendings:any;
  patient_selected:any;
  appointment_pendings:any;
  appointment_attention:any;
  recetas:any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public userService: UserService,
    public appoitmentService: AppointmentService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((resp:any)=>{
      // console.log(resp);
      this.appointment_id = resp.id;
      
    });
    this.getInfoCita();
    this.getInfoReceta();
  }

  
getInfoCita(){
    this.appoitmentService.showAppointment(this.appointment_id).subscribe((resp:any)=>{
      // console.log(resp);
      this.appointment = resp.appointment;
      
    })
  }

  getInfoReceta(){
    this.appoitmentService.showCitamedica(this.appointment_id).subscribe((resp:any)=>{
      // console.log(resp);
      this.appointment_attention = resp.appointment_attention;
      this.appointment = resp.appointments;
      this.recetas = resp.appointment_attention.receta_medica;
      
    })
  }


  

}
