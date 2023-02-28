import { CorreoApiSendinblueService } from './../../services/correo-api-sendinblue.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HEADERS } from 'src/app/common/api-resource';
import { Campaigns } from '../../interfaces/campaigns';
import { birthDay } from '../../interfaces/happybirthday.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myform!:FormGroup;
  //formLogin: FormGroup = new FormGroup({});
  
  datosClientes: any[] = [];
  ListaCampanas:any[]=[];
  empresass: string[] = ["Funeraria Las Flores", "Cementerio la Resurreccion", "Funeraria Altamira", "Indelpa", "Campaña para toda las empresas"];

  campaigns : Campaigns = { // este arreglo es para realiza el registro de campañas
     
    name_campaigns: 'Campaña Cumpleañero', 
    id_plantilla: 0,
    business: '',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
   // fecha_inicio: '',
    //fecha_fin: '',
    tipo_mora: '',
  };

  constructor(
    private fb: FormBuilder, private loginNamvar: CorreoApiSendinblueService,
    private service: CorreoApiSendinblueService
  ) { }


  ngOnInit(): void {
    this.myform= this.createMyForm();

  }
  private createMyForm():FormGroup{
    return this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }
  
  public submitFormulario(){
    if(this.myform.invalid){
      Object.values(this.myform.controls).forEach(control =>{
        control.markAllAsTouched();
      })
      return;
    }

    if(!this.loginNamvar.ingresarAplicativo(this.myform.value)){

      alert("Usuario y contraseña invalidos")
    }

    

  }

  public get f():any{
    return this.myform.controls; 
  }
 // login() {
  //  if (this.formLogin.invalid) {
   //   this.formLogin.markAllAsTouched();
   //   for (const key in this.formLogin.controls) {
   //     this.formLogin.controls[key].markAsDirty();
   //   }
  //    return ;
  //  }
  //  console.log(this.formLogin.value);
    
 // }

 /*send(correo: string, nombre_cliente: string, busines: string,fecha: Date) {


  const data: birthDay = {

    to: [
      {
        email: correo,
        name: nombre_cliente
      }
    ],
    templateId: this.campaigns.id_plantilla,
    params: {
      name: nombre_cliente,
      business: busines,
      fecha: fecha
    },
    headers: {
      "X-Mailin-custom": HEADERS['X-Mailin-custom'],
      charset: HEADERS.charset
    }
  }
  this.service.sendCorreo(data).subscribe(
    resp => {
      console.log(data)
      alert("Correo Enviado")

    },
    error => {
      console.log(data);
      console.log(error + "Renan Prueba ");
    }
  );

}*/
}
