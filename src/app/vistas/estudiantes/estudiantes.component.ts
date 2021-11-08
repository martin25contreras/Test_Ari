import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

//importando el servicio para conexion a la API
import { ApiService } from '../../servicios/api/api.service';


//importando los modelos
import { ListaI } from '../../modelos/lista.interface'

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes!:ListaI[];
  constructor( private api:ApiService, private router:Router) { }

  ngOnInit(): void {

    this.api.getAllEstudiantes().subscribe(data =>{
      this.estudiantes = data
    })
  }



  nuevoEstudiante(){
    this.router.navigate(['nuevo']);
  }
}
