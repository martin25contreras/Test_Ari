import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//importando el servicio para conexion a la API
import { ApiService } from '../../servicios/api/api.service';


//importando los modelos
import { ListaI } from '../../modelos/lista.interface'

@Component({
  selector: 'app-raven',
  templateUrl: './raven.component.html',
  styleUrls: ['./raven.component.css']
})
export class RavenComponent implements OnInit {

  personajes!:ListaI[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllPersonajesRaven().subscribe(data=>{
      this.personajes=data
    })
  }

}

