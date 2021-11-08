import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

    $(function(){
      $('[data-toggle="tooltip"]').show();
      $(".side-nav .collapse").on("hide.bs.collapse", function() {                   
          $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
      });
      $('.side-nav .collapse').on("show.bs.collapse", function() {                        
          $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");        
      });
    })
  }

  gryff(){
    this.router.navigate(['gryff']);
  }

   slyth(){
    this.router.navigate(['slyth']);
  }

  raven(){
    this.router.navigate(['raven']);
  }

  huff(){
    this.router.navigate(['huff']);
  }

  estudiantes(){
    this.router.navigate(['estudiantes']);
  }

  profesores(){
    this.router.navigate(['profesores']);
  }

}
