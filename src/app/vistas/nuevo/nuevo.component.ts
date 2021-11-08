import { Component, OnInit } from '@angular/core';

//librerias para trabajar con formularios
import { FormGroup, FormControl } from '@angular/forms';


//Api
import { ApiService } from '../../servicios/api/api.service';

//Navegación entre páginas
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit{

  nuevoForm!: any

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void{

    this.nuevoForm = new FormGroup({
      name: new FormControl(''),
      patronus: new FormControl(''),
      yearOfBirth: new FormControl(''),
      image: new FormControl('')
    });
  }

    postForm(){
     let bla= localStorage.setItem("NuevoAlumno", JSON.stringify(this.nuevoForm.value));
     this.router.navigate(['mnuevo']);
    }
}
