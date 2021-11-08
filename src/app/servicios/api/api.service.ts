import { Injectable } from '@angular/core';
import { ListaI } from '../../modelos/lista.interface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://hp-api.herokuapp.com/api/characters/"

  constructor(private http:HttpClient) { }

  getAllProfesores():Observable<ListaI[]>{
    let direccion = this.url + "staff";
    return this.http.get<ListaI[]>(direccion)
  }

  getAllEstudiantes():Observable<ListaI[]>{
    let direccion = this.url + "students";
    return this.http.get<ListaI[]>(direccion)
  }

  getAllPersonajesGryff():Observable<ListaI[]>{
    let direccion = this.url + "house/gryffindor";
    return this.http.get<ListaI[]>(direccion)
  }

  getAllPersonajesSlyth():Observable<ListaI[]>{
    let direccion = this.url + "house/slytherin";
    return this.http.get<ListaI[]>(direccion)
  }

  getAllPersonajesRaven():Observable<ListaI[]>{
    let direccion = this.url + "house/ravenclaw";
    return this.http.get<ListaI[]>(direccion)
  }

  getAllPersonajesHuff():Observable<ListaI[]>{
    let direccion = this.url + "house/hufflepuff";
    return this.http.get<ListaI[]>(direccion)
  }

  set(key: string, data: unknown){
    localStorage.setItem(key, JSON.stringify(data));
  }
  get(key: any){
    return JSON.parse(localStorage.getItem('key')!);
  }
}
