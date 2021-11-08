import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//importando el servicio para conexion a la API
import { ApiService } from '../../servicios/api/api.service';


//importando los modelos
import { ListaI } from '../../modelos/lista.interface'

@Component({
  selector: 'app-slyth',
  templateUrl: './slyth.component.html',
  styleUrls: ['./slyth.component.css']
})
export class SlythComponent implements OnInit {

  personajes!:ListaI[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllPersonajesSlyth().subscribe(data=>{
      this.personajes=data
    })
  }

}
