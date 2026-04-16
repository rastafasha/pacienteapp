import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../models/presupuesto';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-signosvitales',
    templateUrl: './signosvitales.component.html',
    styleUrls: ['./signosvitales.component.css'],
    standalone: false
})
export class SignosvitalesComponent implements OnInit {
  // public cargando: boolean = true;

  @Input() patient:Patient;
    @Input() usuario:User;
  user:any;
  patient_id:number;
  appointments:any;
  num_appointment:any;
  money_of_appointments:any;
  num_appointment_pendings:any;
  patient_selected:any;
  appointment_pendings:any;
  cargando = false;
  temperature: number;

  constructor(
    public authService:AuthService,
   
    public userService:UserService,
    public activatedRoute:ActivatedRoute,
    private router: Router,
  ) { 
    this.user = this.authService.user;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.authService.getLocalStorage();
    this.authService.closeMenu();
    this.patient_selected = this.patient;
    this.cargando = true;
    if (this.patient_selected) {
      this.temperature = this.patient_selected.temperature; // Initialize temperature from patient object
      this.cargando = false;
    } else {
        console.error('Patient data is undefined');
    }
    
  }
  
  

}
