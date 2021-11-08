import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Libreria para navegar entre las páginas
import { AppRoutingModule, routingComponets } from './app-routing.module';

import { AppComponent } from './app.component';

//Librerias para trabajar con Material
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'

import * as $ from 'jquery';

//libería para trabajar con htpp
import { HttpClientModule} from '@angular/common/http';
//librería para trabajar con formularios
import { ReactiveFormsModule, FormsModule} from '@angular/forms'; 
//librerias para trabajar con toastr y colocar alertas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MnuevoComponent } from './vistas/mnuevo/mnuevo.component';
import { MenuComponent } from './plantillas/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponets,
    MnuevoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // requiere animations module
    ToastrModule.forRoot(), // ToastrModule agregado
    MatButtonModule, 
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
