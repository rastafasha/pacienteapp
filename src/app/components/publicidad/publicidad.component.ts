import { Component, OnInit } from '@angular/core';
import { of, delay } from 'rxjs';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {

  loading:boolean;
  obs$ = of(1).pipe(delay(500));
  
  constructor() { }

  ngOnInit(): void {
  }

}
