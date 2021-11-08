import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//importando el servicio para conexion a la API
import { ApiService } from '../../servicios/api/api.service';


//importando los modelos
import { ListaI } from '../../modelos/lista.interface'


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})

export class ProfesoresComponent implements OnInit {


  profesores!:ListaI[] 

  constructor(private api:ApiService, private router:Router) {
    
  }

  ngOnInit(): void {

    this.api.getAllProfesores().subscribe(data =>{
      this.profesores = data
    })
  }
  
  
}
