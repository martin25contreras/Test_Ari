import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

//importando el servicio para conexion a la API
import { ApiService } from '../../servicios/api/api.service';


//importando los modelos
import { ListaI } from '../../modelos/lista.interface'
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-mnuevo',
  templateUrl: './mnuevo.component.html',
  styleUrls: ['./mnuevo.component.css']
})
export class MnuevoComponent implements OnInit {
  
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void { }
  
  nuevo = JSON.parse(localStorage.getItem('NuevoAlumno')!);
}
