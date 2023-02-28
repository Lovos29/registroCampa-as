
import { birthDay } from './../../interfaces/happybirthday.interface';
import { Campaigns } from './../../interfaces/campaigns';
import { CorreoApiSendinblueService } from './../../services/correo-api-sendinblue.service';
import { Component, OnInit, } from '@angular/core';
import { HEADERS, TEMPLATE_ID, } from 'src/app/common/api-resource';
import { __values } from 'tslib';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import Swal from 'sweetalert2'
import showLoading from 'sweetalert2'
import { timers } from 'jquery';
import * as moment from 'moment';




@Component({
  selector: 'app-birth-day',
  templateUrl: './birth-day.component.html',
  styleUrls: ['./birth-day.component.css']
})



export class BirthDayComponent implements OnInit {


  public contacto!: FormGroup;

  submitted = false;

  datosClientes: any[] = [];
  selectedEmpresas: string[] = [];
  busines = this.selectedEmpresas.toString();
  selectedEstado: string[] = [];
  estados: string[] = ["Activado", "Desactivado"]
  empresass: string[] = ["Funeraria Las Flores", "Cementerio la Resurreccion", "Funeraria Altamira", "Indelpa"];
  mivariable: String = "h"
  tMora: string[] = ["30", "60", "90", "120", "NO APLICA"];
  tMoraSelected: string[] = [];

  //fechaHoy = new Date();
  fechaHoy = moment().format('YYYY-MM-DD HH:mm:ss');  

  consulta: any[] = [];

  campaigns: Campaigns = { // este arreglo es para realiza el registro de campañas

    name_campaigns: 'Campaña Cumpleañero',
    id_plantilla: 0,
    business: '',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    // fecha_inicio: '',
    //fecha_fin: '',
    tipo_mora: 'NO APLICA',
  };



  // esta variable es para mostrar las campañas en pantalla
  campaignsMostrar: Campaigns[] = [];

  constructor(
    private service: CorreoApiSendinblueService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    //CODIGO PARA VALIDACIONES
    // this.contacto= this.createMyForm();

    console.log(this.fechaHoy);
    

  }

  /* CODIGO PARA VALIDACIONES */
  private createMyForm(): FormGroup {
    return this.formBuilder.group({
      campaings: ['', Validators.required],
      id_plantilla: ['', Validators.required],
      date_start: ['', Validators.required],
      date_finally: ['', Validators.required],
      selectedEstado: ['', Validators.required],
    });
  }

  public submitFormulario() { // codigo para validaciones
    if (this.contacto.invalid) {
      Object.values(this.contacto.controls).forEach(control => {
        control.markAllAsTouched();
      })
      return;
    }

  }

  public get f(): any { // codigo para validaciones
    return this.contacto.controls;
  }

  // OBTENEMOS LAS CONSULTAS DE TODAS LAS BASES DE DATOS DE PRODUCCION GLR 

  getDataCliente() {

    Swal.fire({
      title: 'Esta seguro/a de enviar la campaña?',
      text: "Puede revisar la informacion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, enviar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Enviado!',
          'Campaña enviada',
          'success'
        )
      }
    })

    if (this.empresass[0] === this.selectedEmpresas[0]) {

      this.service.getDataClienteFuneraria()
        .subscribe(
          resp => {
            this.datosClientes = resp;
            //console.log(this.datosCliente)
            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Funeraria Las Flores";
            let fecha = this.fechaHoy




            for (let i = 0; i < this.datosClientes.length; i++) {


              for (const key in this.datosClientes[i]) {
                console.log(this.datosClientes[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.datosClientes[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.datosClientes[i][key];
                  // console.log(nombre_cliente);
                }

              }
              this.send(correo, nombre_cliente, business, fecha);
            }
          },
          err => console.log(err)
        )
      //alert("eligio Funerales")



    } else if (this.empresass[1] === this.selectedEmpresas[0]) {
      this.service.getDataCliente()
        .subscribe(
          resp => {
            this.datosClientes = resp;
            //console.log(this.datosCliente)
            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Cementerio la Resurreccion";
            let fecha = this.fechaHoy

            for (let i = 0; i < this.datosClientes.length; i++) {


              for (const key in this.datosClientes[i]) {
                console.log(this.datosClientes[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.datosClientes[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.datosClientes[i][key];
                  // console.log(nombre_cliente);
                }

              }
              this.send(correo, nombre_cliente, business, fecha);
            }
          },
          err => console.log(err)
        )
      // alert("eligio Cementerio")

    } else if (this.empresass[2] === this.selectedEmpresas[0]) {

      this.service.getDataClienteAltamira()

        .subscribe(
          resp => {
            this.datosClientes = resp;
            //console.log(this.datosCliente)
            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Funeraria Altamira";
            let fecha = this.fechaHoy

            for (let i = 0; i < this.datosClientes.length; i++) {


              for (const key in this.datosClientes[i]) {
                console.log(this.datosClientes[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.datosClientes[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.datosClientes[i][key];
                  // console.log(nombre_cliente);
                }

              }
              this.send(correo, nombre_cliente, business,fecha);
            }
          },
          err => console.log(err)
        )

      //alert("eligio altamira")

    } else if (this.empresass[3] === this.selectedEmpresas[0]) {
      this.service.getDataClienteIndelpa()
        .subscribe(
          resp => {
            this.datosClientes = resp;
            //console.log(this.datosCliente)
            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Indelpa";
            let fecha = this.fechaHoy

            for (let i = 0; i < this.datosClientes.length; i++) {


              for (const key in this.datosClientes[i]) {
                console.log(this.datosClientes[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.datosClientes[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.datosClientes[i][key];
                  // console.log(nombre_cliente);
                }

              }
              this.send(correo, nombre_cliente, business,fecha);
            }
          },
          err => console.log(err)
        )
      //alert("eligio indelpa")

    }
    
    /* else {

      //Funerales

      this.service.getDataClienteFuneraria()
        .subscribe(
          resp => {
            this.datosClientes = resp;
            //console.log(this.datosCliente)
            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Funeraria Las Flores";

            for (let i = 0; i < this.datosClientes.length; i++) {


              for (const key in this.datosClientes[i]) {
                console.log(this.datosClientes[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.datosClientes[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.datosClientes[i][key];
                  // console.log(nombre_cliente);
                }

              }
              this.send(correo, nombre_cliente, business);
            }
          },
          err => console.log(err)
        )

      //cementerio

      this.service.getDataCliente()
        .subscribe(
          resp => {
            this.datosClientes = resp;
            //console.log(this.datosCliente)
            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Cementerio la Resurreccion";

            for (let i = 0; i < this.datosClientes.length; i++) {


              for (const key in this.datosClientes[i]) {
                console.log(this.datosClientes[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.datosClientes[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.datosClientes[i][key];
                  // console.log(nombre_cliente);
                }

              }
              this.send(correo, nombre_cliente, business);
            }
          },
          err => console.log(err)
        )

      // altamira
      this.service.getDataClienteAltamira()
        .subscribe(
          resp => {
            this.datosClientes = resp;
            //console.log(this.datosCliente)
            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Funeraria Altamira";

            for (let i = 0; i < this.datosClientes.length; i++) {


              for (const key in this.datosClientes[i]) {
                console.log(this.datosClientes[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.datosClientes[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.datosClientes[i][key];
                  // console.log(nombre_cliente);
                }

              }
              this.send(correo, nombre_cliente, business);
            }
          },
          err => console.log(err)
        )

      // indelpa
      this.service.getDataClienteIndelpa()
        .subscribe(
          resp => {
            this.datosClientes = resp;
            //console.log(this.datosCliente)
            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Indelpa";

            for (let i = 0; i < this.datosClientes.length; i++) {


              for (const key in this.datosClientes[i]) {
                console.log(this.datosClientes[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.datosClientes[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.datosClientes[i][key];
                  // console.log(nombre_cliente);
                }

              }
              this.send(correo, nombre_cliente, business);
            }
          },
          err => console.log(err)
        )

      //alert("Todas las anteriores") 
    }*/

  }


  submitCampanigns() {

    if (this.empresass[0] === this.selectedEmpresas[0]) {
      let empresa = "Funeraria Las Flores";

      this.campaigns.business = empresa;

      console.log(this.campaigns.business);

    } if (this.empresass[1] === this.selectedEmpresas[0]) {
      let empresa = "Cementerio la Resurreccion";
      this.campaigns.business = empresa;
      console.log(this.campaigns.business);
    } if (this.empresass[2] === this.selectedEmpresas[0]) {
      let empresa = "Funeraria Altamira";
      this.campaigns.business = empresa;
      console.log(this.campaigns.business);
    } if (this.empresass[3] === this.selectedEmpresas[0]) {
      let empresa = "Indelpa";
      this.campaigns.business = empresa;
      console.log(this.campaigns.business);
    } if (this.empresass[4] === this.selectedEmpresas[0]) {
      let empresa = "Campaña para toda las empresas";
      this.campaigns.business = empresa;
      console.log(this.campaigns.business);
    }

    this.service.createCampaigns(this.campaigns)
      .subscribe(
        res => {
          console.log(res),

            Swal.fire({
              //position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          this.router.navigate(['/']);

        },
        err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Verifique por favor, que los campos esten debidamente llenos!',
            //footer: '<a href="">Why do I have this issue?</a>'

          })
          console.log(err)

        }

      )
  }


  send(correo: string, nombre_cliente: string, busines: string, fecha: string) {


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

  }


}
