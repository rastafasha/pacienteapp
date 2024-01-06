import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any;
  patient:any = [];
  usuario:any = [];

  constructor(
    public authService:AuthService,
    public userService:UserService,
    private router: Router,
    
  ) {
    this.user = this.authService.user;
   }

  ngOnInit(): void {
    
    this.authService.getLocalStorage();
    this.getInfoUser()
    this.authService.getLocalDarkMode();
  }

  getInfoUser(){
    this.userService.showPatientByNdoc(this.user.n_doc).subscribe((resp:any)=>{
      // console.log('todo',resp);
      this.patient = resp.patient.data[0];
      // console.log('patient', this.patient);
      this.user = resp.user.data[0];
      // console.log('user', this.user);
      // console.log('patient', this.patient);
      // this.usuario = resp;
    })
  }

  openMenu(){
    var menuLateral = document.getElementsByClassName("sidemenu ");
    for (var i = 0; i<menuLateral.length; i++) {
       menuLateral[i].classList.add("active");

    }
  }
  closeMenu(){
    this.authService.closeMenu();
  }

  logout(){
    this.authService.logout();
  }

  darkMode(dark:string){
    var element = document.body;

    const classExists = document.getElementsByClassName(
      'darkmode'
     ).length > 0;

    var dayNight = document.getElementsByClassName("home");
      for (var i = 0; i<dayNight.length; i++) {
        // dayNight[i].classList.toggle("darkmode");
        element.classList.toggle("darkmode");

      }
      // localStorage.setItem('dark', dark);

      if (classExists) {
        localStorage.removeItem('darkmode');
        // console.log('✅ class exists on page, removido');
      } else {
        localStorage.setItem('darkmode', dark);
        // console.log('⛔️ class does NOT exist on page, agregado');
      }
      // console.log('Pulsado');
  }
}
