import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CorreoApiSendinblueService } from 'src/app/correos/services/correo-api-sendinblue.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles:[
   `  li{
    cursor:pointer;
  }`
   
  ]
})
export class NavbarComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

}
