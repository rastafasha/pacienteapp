import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { ListaComponent } from './lista/lista.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AddAppointmentsComponent } from './agendar-cita/add-appointments/add-appointments.component';
import { DetallecitaComponent } from './detallecita/detallecita.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';

//pages


const childRoutes: Routes = [

    { path: '',  component: HomeComponent, data:{title:'app'} },

    {
    path:'lista', component:ListaComponent
    },
    {
      path:'perfil', component:PerfilComponent
    },
    {
      path:'agendar-cita', component:AddAppointmentsComponent
    },
    {
      path:'perfil-doctor/:id', component:DoctorProfileComponent
    },
    {
      path:'agendar-cita/:id', component:AgendarCitaComponent
    },
    {
      path:'detalle-cita/:id', component:DetallecitaComponent
    },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component:  HomeComponent },


]

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoute),
    RouterModule.forChild(childRoutes),
  ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule { }