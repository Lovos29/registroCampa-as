import { Component } from '@angular/core';
import { CorreoApiSendinblueService } from './correos/services/correo-api-sendinblue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'campanas-correo-api-sendinblue';
  constructor(private loginNamvar: CorreoApiSendinblueService){}

  public visualizarMenu():boolean{    
    return this.loginNamvar.habilitarlogeo();


  }
 
  
  
}
