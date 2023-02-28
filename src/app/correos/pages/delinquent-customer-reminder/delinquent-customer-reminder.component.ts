import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { TEMPLATE_ID, HEADERS } from 'src/app/common/api-resource';
import Swal from 'sweetalert2';
import { Campaigns } from '../../interfaces/campaigns';
import { DelinquentCustomerReminder } from '../../interfaces/delinquent-customer-reminder.interface';
import { CorreoApiSendinblueService } from '../../services/correo-api-sendinblue.service';

@Component({
  selector: 'app-delinquent-customer-reminder',
  templateUrl: './delinquent-customer-reminder.component.html',
  styleUrls: ['./delinquent-customer-reminder.component.css']
})
export class DelinquentCustomerReminderComponent implements OnInit {


  datosClientes: any[] = [];
  selectedEmpresas: string[] = [];
  selectedEstado: string[] = [];
  estados: string[] = ["Activado", "Desactivado"]
  empresass: string[] = ["Funeraria Las Flores", "Cementerio la Resurreccion", "Funeraria Altamira", "Indelpa"];
  mivariable: String = "h"
  tMora: string[] = ["30", "60", "90", "120", "+120"];
  tMoraSelected: string[] = [];
  fechaHoy = moment().format('YYYY-MM-DD HH:mm:ss');

  VarClienteMora: any[] = [];

  campaigns: Campaigns = {

    name_campaigns: 'Campaña clientes en mora',
    id_plantilla: 0,
    business: '',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    //  fecha_inicio: '',
    // fecha_fin: '',
    status: '',
    tipo_mora: '',
  };



  //campaignsMostrar: Campaigns[]=[];




  constructor(
    private service: CorreoApiSendinblueService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  /* FUNCION GETDATACLIENTE NO SE ESTA OCUPANDO*/
 /* getDataCliente() {
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
            this.campaigns.business = "Funeraria Las Flores"


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
      //alert("eligio Funerales")

    } else if (this.empresass[1] === this.selectedEmpresas[0]) {
      this.service.getDataClienteCementerioClienteMora()
        .subscribe(
          resp => {
            this.datosClientes = resp;
            //console.log(this.datosCliente)
            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Cementerio la Resurreccion";
            this.campaigns.business = "Cementerio la Resurreccion";
            let pagosVencidos = "";


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
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.datosClientes[i][key];

                }

              }
              this.send(correo, nombre_cliente, business);
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
            this.campaigns.business = "Funeraria Altamira"


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
            this.campaigns.business = "Indelpa"

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
      //alert("eligio indelpa")

    } else {


      //Funerales
      this.campaigns.business = "Todas las empresas"


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
    }
  }*/

  clientemorosoActualizado() {

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

    if (this.empresass[0] === this.selectedEmpresas[0]) { // FUNERARIA LAS FLORES


      if (this.tMora[0] === this.campaigns.tipo_mora) { //mora 30

        this.service.getDataClienteFunerariaClienteMoraTreinta() 
          .subscribe(
            resp => {


              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Funeraria Las Flores";
              this.campaigns.business = "Funeraria Las Flores";
              let pagosVencidos = 0;
              let fecha = this.fechaHoy

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "nombre_cliente") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                this.send(correo, nombre_cliente, business,fecha);
              }

            },
            err => console.log(err)

          )

      }
      if (this.tMora[1] === this.campaigns.tipo_mora) {  // mora 60
        this.service.getDataClienteFunerariaClienteMoraSesenta()
          .subscribe(
            resp => {

              
              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Funeraria Las Flores";
              this.campaigns.business = "Funeraria Las Flores";
              let pagosVencidos = 0;
              let fecha = this.fechaHoy
              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "name") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }
                  this.send(correo, nombre_cliente, business,fecha);

          
              }

            },
            err => console.log(err)
          )

      }

      if (this.tMora[2] === this.campaigns.tipo_mora){ //mora 90

        this.service.getDataClienteFunerariaClienteMoraNoventa()
        .subscribe(
          resp =>{

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Funeraria Las Flores";
            this.campaigns.business = "Funeraria Las Flores";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy

            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }

                this.send(correo, nombre_cliente, business,fecha);

            }

          },
           err => console.log(err)
        )

      }

      if (this.tMora[3] === this.campaigns.tipo_mora) {  //mora 120

        this.service.getDataClienteFunerariaClienteMoraCientoVeinte()
        .subscribe(
          resp =>{

            this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Funeraria Las Flores";
              this.campaigns.business = "Funeraria Las Flores";
              let pagosVencidos = 0;
              let fecha = this.fechaHoy

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "nombre_cliente") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                  this.send(correo, nombre_cliente, business,fecha);

                
              }

          },
           err => console.log(err)
        )

      }

      if (this.tMora[4] === this.campaigns.tipo_mora){  //mora +120

        this.service.getDataClienteFunerariaClienteMoraMasCientoVeinte() // lin tasks-cartera-mascientoveinte
        .subscribe(
          resp => {
          
            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Funeraria Las Flores";
            this.campaigns.business = "Funeraria Las Flores";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "nombre_cliente") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }

                this.send(correo, nombre_cliente, business,fecha);

              
            }

          },
          err => console.log(err)
        )

      }
    } 
    

    else if (this.empresass[1] === this.selectedEmpresas[0]) { // CEMENTERIO

      if (this.tMora[0] === this.campaigns.tipo_mora){ // mora 30

        this.service.getDataClienteCementerioClienteMora()  // tienen link de Bd Virtual // colocar link de mora 30  tasks-cartera-aldia
        .subscribe(
          resp =>{
            

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Cementerio la Resurreccion";
            this.campaigns.business = "Cementerio la Resurreccion";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "nombre_cliente") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }

          },
          err => console.log(err)
        )

      }

      if (this.tMora[1] === this.campaigns.tipo_mora){ // mora 60
        this.service.getDataClienteCementerioClienteMoraSesenta()
        .subscribe(
          resp=>{
            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Cementerio la Resurreccion";
            this.campaigns.business = "Cementerio la Resurreccion";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy

            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);

            }

          },
          err => console.log(err)
        )
      }

      if (this.tMora[2] === this.campaigns.tipo_mora){ // mora 90
        this.service.getDataClienteCementerioClienteMoraNoventa()
        .subscribe(
          resp =>{
            

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Cementerio la Resurreccion";
            this.campaigns.business = "Cementerio la Resurreccion";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }

            
          },
          err => console.log(err)
          
        )

      }

      if (this.tMora[3] === this.campaigns.tipo_mora){ // mora 120

        this.service.getDataClienteCementerioClienteMoraCientoVeinte()
        .subscribe(
          resp =>{

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Cementerio la Resurreccion";
            this.campaigns.business = "Cementerio la Resurreccion";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "nombre_cliente") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }
          },
          err => console.log(err)
        )
      }

      if (this.tMora[4] === this.campaigns.tipo_mora){ // mora +120

        this.service.getDataClienteCementerioClienteMoraMasCientoVeinte()
        .subscribe(
          resp =>{

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Cementerio la Resurreccion";
            this.campaigns.business = "Cementerio la Resurreccion";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "nombre_cliente") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }
          },
          err => console.log(err)
        )
      }

    } 
    
    else if (this.empresass[2] === this.selectedEmpresas[0]) { // FUNERALES ALTAMIRA


     
      if (this.tMora[0] === this.campaigns.tipo_mora){ // mora 30

        this.service.getDataClienteAltamiraClienteMoraTreinta()
        .subscribe(
          resp =>{
            

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Funeraria Altamira";
            this.campaigns.business = "Funeraria Altamira";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "nombre_cliente") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }

          },
          err => console.log(err)
        )

      }

      if (this.tMora[1] === this.campaigns.tipo_mora){ // mora 60
        this.service.getDataClienteAltamiraClienteMoraSesenta()
        .subscribe(
          resp=>{
            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Funeraria Altamira";
            this.campaigns.business = "Funeraria Altamira";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);

            }

          },
          err => console.log(err)
        )
      }

      if (this.tMora[2] === this.campaigns.tipo_mora){ // mora 90
        this.service.getDataClienteAltamiraClienteMoraNoventa()
        .subscribe(
          resp =>{
            

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Funeraria Altamira";
            this.campaigns.business = "Funeraria Altamira";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }

            
          },
          err => console.log(err)
          
        )

      }

      if (this.tMora[3] === this.campaigns.tipo_mora){ // mora 120

        this.service.getDataClienteAltamiraClienteMoraCientoVeinte()
        .subscribe(
          resp =>{

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Funeraria Altamira";
            this.campaigns.business = "Funeraria Altamira";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "nombre_cliente") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }
          },
          err => console.log(err)
        )
      }

      if (this.tMora[4] === this.campaigns.tipo_mora){ // mora +120

        this.service.getDataClienteAltamiraClienteMoraMasCientoVeinte()
        .subscribe(
          resp =>{

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Funeraria Altamira";
            this.campaigns.business = "Funeraria Altamira";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "nombre_cliente") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }
          },
          err => console.log(err)
        )
      }

    }

    else if (this.empresass[3] === this.selectedEmpresas[0]) { // INDELPA


          
      if (this.tMora[0] === this.campaigns.tipo_mora){ // mora 30

        this.service.getDataClienteIndelpaClienteMoraTreinta()
        .subscribe(
          resp =>{
            

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Indelpa";
            this.campaigns.business = "Indelpa";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "nombre_cliente") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }

          },
          err => console.log(err)
        )

      }

      if (this.tMora[1] === this.campaigns.tipo_mora){ // mora 60
        this.service.getDataClienteIndelpaClienteMoraSesenta()
        .subscribe(
          resp=>{
            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Indelpa";
            this.campaigns.business = "Indelpa";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);

            }

          },
          err => console.log(err)
        )
      }

      if (this.tMora[2] === this.campaigns.tipo_mora){ // mora 90
        this.service.getDataClienteIndelpaClienteMoraNoventa()
        .subscribe(
          resp =>{
            

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Indelpa";
            this.campaigns.business = "Indelpa";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "name") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }

            
          },
          err => console.log(err)
          
        )

      }

      if (this.tMora[3] === this.campaigns.tipo_mora){ // mora 120

        this.service.getDataClienteIndelpaClienteMoraCientoVeinte()
        .subscribe(
          resp =>{

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Indelpa";
            this.campaigns.business = "Indelpa";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "nombre_cliente") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }
          },
          err => console.log(err)
        )
      }

      if (this.tMora[4] === this.campaigns.tipo_mora){ // mora +120

        this.service.getDataClienteIndelpaClienteMoraMasCientoVeinte()
        .subscribe(
          resp =>{

            this.VarClienteMora = resp;
            console.log(resp);


            let correo = "";
            let nombre_cliente = "";
            let fecha_nacimiento = "";
            let business = "Indelpa";
            this.campaigns.business = "Indelpa";
            let pagosVencidos = 0;
            let fecha = this.fechaHoy
            //numero_de_pagos_vencidos

            for (let i = 0; i < this.VarClienteMora.length; i++) {


              for (const key in this.VarClienteMora[i]) {
                // console.log(this.VarClienteMora[0][key]);

                if (key === "email") {
                  // console.log(this.datosCliente[i][key]);

                  correo = this.VarClienteMora[i][key];
                  //console.log(correo);


                }
                if (key === "nombre_cliente") {
                  nombre_cliente = this.VarClienteMora[i][key];
                  // console.log(nombre_cliente);
                }
                if (key === "numero_de_pagos_vencidos") {
                  pagosVencidos = this.VarClienteMora[i][key];
                  console.log(pagosVencidos + 'pagos vencidos');

                }

              }
                this.send(correo, nombre_cliente, business,fecha);
            }
          },
          err => console.log(err)
        )
      }
    }
    
    /*else { // TODAS LAS EMPRESAS



    }*/

  }





  // codigo que recorrre array
 /*clientemoroso() {

    if (this.empresass[0] === this.selectedEmpresas[0]) { // FUNERARIA LAS FLORES

      this.service.getDataClienteCementerioClienteMora()
        .subscribe(
          resp => {

            if (this.tMora[0] === this.campaigns.tipo_mora) { //MORA 30


              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "nombre_cliente") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 1) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } if (this.tMora[1] === this.campaigns.tipo_mora) { // mora 60



              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "name") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 2) {

                  console.log('ENVIO DE CORREO CON MORA DE 60');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } if (this.tMora[2] === this.campaigns.tipo_mora) {  // mora 90



              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "name") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 3) {

                  console.log('ENVIO DE CORREO CON MORA DE 90');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } else {   //MORA 120




              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "nombre_cliente") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 4) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            }
          },
          err => console.log(err)
        )

    } else if (this.empresass[1] === this.selectedEmpresas[0]) {


      this.service.getDataClienteCementerioClienteMora()
        .subscribe(
          resp => {

            if (this.tMora[0] === this.campaigns.tipo_mora) {


              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "nombre_cliente") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 1) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } if (this.tMora[1] === this.campaigns.tipo_mora) { // mora 60



              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "name") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 2) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } if (this.tMora[2] === this.campaigns.tipo_mora) {  // mora 90



              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "name") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 3) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } else {   //MORA 120




              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "nombre_cliente") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 4) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            }
          },
          err => console.log(err)
        )


    } else if (this.empresass[2] === this.selectedEmpresas[0]) {


      this.service.getDataClienteCementerioClienteMora()
        .subscribe(
          resp => {

            if (this.tMora[0] === this.campaigns.tipo_mora) {


              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "nombre_cliente") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 1) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } if (this.tMora[1] === this.campaigns.tipo_mora) { // mora 60



              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "name") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 2) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } if (this.tMora[2] === this.campaigns.tipo_mora) {  // mora 90



              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "name") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 3) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } else {   //MORA 120




              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "nombre_cliente") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 4) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            }
          },
          err => console.log(err)
        )

    } else if (this.empresass[3] === this.selectedEmpresas[0]) {


      this.service.getDataClienteCementerioClienteMora()
        .subscribe(
          resp => {

            if (this.tMora[0] === this.campaigns.tipo_mora) {


              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "nombre_cliente") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 1) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } if (this.tMora[1] === this.campaigns.tipo_mora) { // mora 60



              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "name") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 2) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } if (this.tMora[2] === this.campaigns.tipo_mora) {  // mora 90



              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "name") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 3) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            } else {   //MORA 120




              this.VarClienteMora = resp;
              console.log(resp);


              let correo = "";
              let nombre_cliente = "";
              let fecha_nacimiento = "";
              let business = "Cementerio la Resurreccion";
              this.campaigns.business = "Cementerio la Resurreccion";
              let pagosVencidos = 0;

              //numero_de_pagos_vencidos

              for (let i = 0; i < this.VarClienteMora.length; i++) {


                for (const key in this.VarClienteMora[i]) {
                  // console.log(this.VarClienteMora[0][key]);

                  if (key === "email") {
                    // console.log(this.datosCliente[i][key]);

                    correo = this.VarClienteMora[i][key];
                    //console.log(correo);


                  }
                  if (key === "nombre_cliente") {
                    nombre_cliente = this.VarClienteMora[i][key];
                    // console.log(nombre_cliente);
                  }
                  if (key === "numero_de_pagos_vencidos") {
                    pagosVencidos = this.VarClienteMora[i][key];
                    console.log(pagosVencidos + 'pagos vencidos');

                  }

                }

                if (pagosVencidos === 4) {

                  console.log('ENVIO DE CORREO CON MORA DE 30');

                  this.send(correo, nombre_cliente, business);

                } if (pagosVencidos === 0) {
                  console.log('CLIENTE NO ESTA EN MORA');

                }

                //this.send(correo, nombre_cliente, business);
              }

            }
          },
          err => console.log(err)
        )

    } else { // TODAS LAS EMPRESAS

    }

  }*/

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
            position: 'top-end',
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


    const data: DelinquentCustomerReminder = {

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
        //console.log(data)
        alert("Correo Enviado")

      },
      error => {
        // console.log(data);
        console.log(error + "Renan Prueba ");
      }
    );

  }

}
