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
  
  public cargando: boolean = true;

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
  description:any;
  doctor:any;
  avatar_doctor:any;
  speciality:any;
  status_pay:any;
  appointment_selected:any;
  appointment_selectedId:any;
  laboratory:number;
  FilesAdded:any = [];

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
  this.cargando = true;
    this.appoitmentService.showAppointment(this.appointment_id).subscribe((resp:any)=>{
      this.cargando = false;
      console.log(resp);
      this.appointment_selected = resp.appointment;
      this.appointment_selectedId = resp.appointment.id;
      this.doctor = resp.appointment.doctor;
      this.avatar_doctor = resp.appointment.doctor.avatar;
      this.speciality = resp.appointment.speciality;
      this.status_pay = resp.appointment.status_pay;

      console.log(this.appointment_selectedId);
      this.getFilesLaboratory();
    })
  }

  getInfoReceta(){
    this.appoitmentService.showCitamedica(this.appointment_id).subscribe((resp:any)=>{
      console.log(resp);
      this.appointment_attention = resp.appointment_attention;
      this.appointment = resp.appointments;
      this.recetas = resp.appointment_attention.receta_medica;
      this.description = resp.appointment_attention.description;
      this.laboratory = resp.appointment_attention.laboratory;
      this.laboratory = resp.appointment_attention.laboratory;
      
      
    })
  }

  getFilesLaboratory(){
    this.appoitmentService.getLaboratoryByAppointment(this.appointment_selectedId).subscribe((resp:any)=>{
      console.log(resp);
      this.FilesAdded = resp.laboratories.data;
    })
  }


  

}
