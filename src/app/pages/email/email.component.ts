import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HEADERS } from 'src/app/common/api-resource';
import { Campaigns } from 'src/app/correos/interfaces/campaigns';
import { birthDay } from 'src/app/correos/interfaces/happybirthday.interface';
import { CorreoApiSendinblueService } from 'src/app/correos/services/correo-api-sendinblue.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  datosClientes: any[] = [];
  ListaCampanas: any[] = [];
  empresass: string[] = ["Funeraria Las Flores", "Cementerio la Resurreccion", "Funeraria Altamira", "Indelpa", "Campaña para toda las empresas"];
  VarClienteMora: any[] = [];
  //fechaHoy= new Date();
  fechaHoy = moment().format('YYYY-MM-DD HH:mm:ss');  
  
  tMora: string[] = ["30", "60", "90", "120"];

  campaigns: Campaigns = { // este arreglo es para realiza el registro de campañas

    name_campaigns: 'Campaña Cumpleañero',
    id_plantilla: 0,
    business: '',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    // fecha_inicio: '',
    //fecha_fin: '',
    tipo_mora: '',
  };

  constructor(private service: CorreoApiSendinblueService) { }

  ngOnInit(): void {


    // getDataCliente(){

    this.service.getCampaigns().subscribe(
      ListaCampanas => {

        this.ListaCampanas = ListaCampanas;
        let campana = "";
        let empresa = "";
       // let plantilla_id = 0;
        let id = 0;
        let mora = "";

        for (let i = 0; i < this.ListaCampanas.length; i++) {

          let plantilla_id = 0;

          for (const key in this.ListaCampanas[i]) {
            //console.log(this.ListaCampanas[i][key]);
          
            if (key === "name_campaigns") {
              // console.log(this.datosCliente[i][key]);

              campana = this.ListaCampanas[i][key];
             // this.campaigns.name_campaigns = campana.toString();

              if (campana === "Campaña Cumpleañero") {

                for (const key in this.ListaCampanas[i]) {

                 

                  if (key === "business") {

                    empresa = this.ListaCampanas[i][key];

                    if (empresa === "Cementerio la Resurreccion") {

                      for (const key in this.ListaCampanas[i]) {

                        if (key === "id_plantilla") {
                          plantilla_id = this.ListaCampanas[i][key];
                         // this.campaigns.id_plantilla = plantilla_id;
                           console.log(plantilla_id +"igual a 2");
                        }

                      }
                      
                      // console.log( "enviando correo...");
                      this.service.getDataCliente() //conexion a bd de cementerio
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
                              this.send(correo, nombre_cliente, business, plantilla_id, fecha);
                              console.log("correo enviado id=6");

                            }
                          },
                          err => console.log(err)
                        )

                    /*  for (const key in this.ListaCampanas[i]) {
                        if (key === "id") {

                          id = this.ListaCampanas[i][key];
                          console.log(id);

                        }
                      }*/

                    }if (empresa === "Funeraria Las Flores") {

                      for (const key in this.ListaCampanas[i]) {

                        if (key === "id_plantilla") {
                          plantilla_id = this.ListaCampanas[i][key];
                         // this.campaigns.id_plantilla = plantilla_id;
                           console.log(plantilla_id +"igual a 4");
                        }

                      }

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
                               // console.log(this.datosClientes[0][key]);

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
                              this.send(correo, nombre_cliente, business, plantilla_id,fecha);
                              console.log("correo enviado id=2");
                            }
                          },
                          err => console.log(err)
                        )
                    }else if (empresa === "Funeraria Altamira") {

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
                              this.send(correo, nombre_cliente, business,plantilla_id, fecha);
                            }
                          },
                          err => console.log(err)
                        )
                    }else if (empresa === "Indelpa") {
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
                              this.send(correo, nombre_cliente, business,plantilla_id, fecha);
                            }
                          },
                          err => console.log(err)
                        )
                    } /*else if (empresa === "Campaña para toda las empresas") {
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
                }
              }/* else if (campana === "Campaña Notificacion de eventos") {

                // POR EL MOMENTO SE DEJA LA CONSULTA DE LA DATA DE CUMPLEAÑEROS  

                for (const key in this.ListaCampanas[i]) {

                  if (key === "business") {

                    empresa = this.ListaCampanas[i][key];

                    if (empresa === "Cementerio la Resurreccion") {
                      // console.log( "enviando correo...");
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
                              console.log("correo enviado");

                            }
                          },
                          err => console.log(err)
                        )

                      for (const key in this.ListaCampanas[i]) {
                        if (key === "id") {

                          id = this.ListaCampanas[i][key];
                          console.log(id);

                        }
                      }

                    } else if (empresa === "Funeraria Las Flores") {
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
                    } else if (empresa === "Funeraria Altamira") {

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
                    } else if (empresa === "Indelpa") {
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
                    } else if (empresa === "Campaña para toda las empresas") {
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

                    }
                  }
                }
              }*/
              if (campana === "Campaña clientes en mora") {

                for (const key in this.ListaCampanas[i]) {

               

                  if (key === "business") {
                    empresa = this.ListaCampanas[i][key];

                    if (empresa === "Cementerio la Resurreccion") {
                      // console.log( "enviando correo...");
                      this.service.getDataClienteCementerioClienteMora()
                        .subscribe(
                          resp => {

                           // if (this.tMora[0] === this.campaigns.tipo_mora) {
                            if (mora === "30") {

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

                                if (pagosVencidos === 1) {

                                  console.log('ENVIO DE CORREO CON MORA DE 30');

                                  this.send(correo, nombre_cliente, business,plantilla_id,fecha);

                                } if (pagosVencidos === 0) {
                                  console.log('CLIENTE NO ESTA EN MORA');

                                }

                                //this.send(correo, nombre_cliente, business);
                              }

                            } if (mora === "60") { // mora 60



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

                                if (pagosVencidos === 2) {

                                  console.log('ENVIO DE CORREO CON MORA DE 30');

                                  this.send(correo, nombre_cliente, business,plantilla_id,fecha);

                                } if (pagosVencidos === 0) {
                                  console.log('CLIENTE NO ESTA EN MORA');

                                }

                                //this.send(correo, nombre_cliente, business);
                              }

                            } if (mora === "90") {  // mora 90



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

                                if (pagosVencidos === 3) {

                                  console.log('ENVIO DE CORREO CON MORA 90');

                                  this.send(correo, nombre_cliente, business,plantilla_id, fecha);

                                } if (pagosVencidos === 0) {
                                  console.log('CLIENTE NO ESTA EN MORA');

                                }

                                //this.send(correo, nombre_cliente, business);
                              }

                            } else if (mora === "120"){   //MORA 120




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

                                // if (pagosVencidos === 4)
                                if (pagosVencidos >= 4) {

                                  console.log('ENVIO DE CORREO CON MORA 120');

                                  this.send(correo, nombre_cliente, business,plantilla_id,fecha);

                                } if (pagosVencidos === 0) {
                                  console.log('CLIENTE NO ESTA EN MORA');

                                }

                                //this.send(correo, nombre_cliente, business);
                              }

                            }
                          },
                          err => console.log(err)
                        )

                    }if (empresa === "Funeraria Las Flores") {
                      this.service.getDataClienteFunerariaClienteMoraAlDia()                     
                      .subscribe(
                        resp => {

                         // if (this.tMora[0] === this.campaigns.tipo_mora) {
                          if (mora === "30") {

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

                              if (pagosVencidos === 1) {

                                console.log('ENVIO DE CORREO CON MORA DE 30');

                                this.send(correo, nombre_cliente, business,plantilla_id,fecha);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } if (mora === "60") { // mora 60



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

                              if (pagosVencidos === 2) {

                                console.log('ENVIO DE CORREO CON MORA DE 60');

                                this.send(correo, nombre_cliente, business,plantilla_id,fecha);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } if (mora === "90") {  // mora 90



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

                              if (pagosVencidos === 3) {

                                console.log('ENVIO DE CORREO CON MORA 90');

                                this.send(correo, nombre_cliente, business,plantilla_id,fecha);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } else if (mora === "120"){   //MORA 120




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

                              // if (pagosVencidos === 4)
                              if (pagosVencidos >= 4) {

                                console.log('ENVIO DE CORREO CON MORA +120');

                                this.send(correo, nombre_cliente, business,plantilla_id,fecha);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          }
                        },
                        err => console.log(err)
                      )
                      /* fin funeraria */
                    }if (empresa === "Funeraria Altamira") {

                      for (const key in this.ListaCampanas[i]) {

                        if (key === "id_plantilla") {
                          plantilla_id = this.ListaCampanas[i][key];
                         // this.campaigns.id_plantilla = plantilla_id;
                           console.log(plantilla_id + " igual a 7");
                        }

                        if (key === "tipo_mora") {
                          mora = this.ListaCampanas[i][key];
                          console.log(mora + " mora igual a 60");
                     
                        }

                      }
                      //this.service.getDataClienteAltamiraClienteMora()
                      this.service.getDataClienteCementerioClienteMora()
                      .subscribe(
                        resp => {

                         // if (this.tMora[0] === this.campaigns.tipo_mora) {
                          if (mora === "30") {

                            this.VarClienteMora = resp;
                            //console.log(resp);


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

                              if (pagosVencidos === 1) {

                                this.send(correo, nombre_cliente, business, plantilla_id,fecha);
                                console.log('ENVIO DE CORREO CON MORA DE 30');

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } if (mora === "60") { // mora 60



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

                              if (pagosVencidos === 2) {

                                console.log('ENVIO DE CORREO CON MORA DE 60');

                                this.send(correo, nombre_cliente, business, plantilla_id,fecha);
                                console.log("correo enviado id=4 con mora de 60");


                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } if (mora === "90") {  // mora 90



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

                              if (pagosVencidos === 3) {

                                console.log('ENVIO DE CORREO CON MORA 90');

                                this.send(correo, nombre_cliente, business, plantilla_id,fecha);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } else if (mora === "120"){   //MORA 120

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

                              // if (pagosVencidos === 4)
                              if (pagosVencidos >= 4) {

                                console.log('ENVIO DE CORREO CON MORA +120');

                                this.send(correo, nombre_cliente, business,plantilla_id, fecha);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          }
                        },
                        err => console.log(err)
                      )
                    } else if (empresa === "Indelpa") {
                      this.service.getDataClienteIndelpaClienteMoraAlDia()
                      .subscribe(
                        resp => {

                         // if (this.tMora[0] === this.campaigns.tipo_mora) {
                          if (mora === "30") {

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

                              if (pagosVencidos === 1) {

                                console.log('ENVIO DE CORREO CON MORA DE 30');

                                this.send(correo, nombre_cliente, business,plantilla_id,fecha);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } if (mora === "60") { // mora 60



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

                              if (pagosVencidos === 2) {

                                console.log('ENVIO DE CORREO CON MORA DE 60');

                                this.send(correo, nombre_cliente, business,plantilla_id,fecha);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } if (mora === "90") {  // mora 90



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

                              if (pagosVencidos === 3) {

                                console.log('ENVIO DE CORREO CON MORA 90');

                                this.send(correo, nombre_cliente, business,plantilla_id,fecha);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } else if (mora === "120"){   //MORA 120

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

                              // if (pagosVencidos === 4)
                              if (pagosVencidos >= 4) {

                                console.log('ENVIO DE CORREO CON MORA +120');

                                this.send(correo, nombre_cliente, business,plantilla_id,fecha);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          }
                        },
                        err => console.log(err)
                      )
                    }/* else if (empresa === "Campaña para toda las empresas") {



                      //Funerales
                      this.service.getDataClienteFunerariaClienteMora()
                      .subscribe(
                        resp => {

                         // if (this.tMora[0] === this.campaigns.tipo_mora) {
                          if (mora === "30") {

                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Funeraria Las Flores";
                            this.campaigns.business = "Funeraria Las Flores";
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

                          } if (mora === "60") { // mora 60



                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Funeraria Las Flores";
                            this.campaigns.business = "Funeraria Las Flores";
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

                          } if (mora === "90") {  // mora 90



                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Funeraria Las Flores";
                            this.campaigns.business = "Funeraria Las Flores";
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

                                console.log('ENVIO DE CORREO CON MORA 90');

                                this.send(correo, nombre_cliente, business);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } else if (mora === "120"){   //MORA 120




                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Funeraria Las Flores";
                            this.campaigns.business = "Funeraria Las Flores";
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

                              // if (pagosVencidos === 4)
                              if (pagosVencidos >= 4) {

                                console.log('ENVIO DE CORREO CON MORA +120');

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

                      //cementerio
                      this.service.getDataClienteCementerioClienteMora()
                      .subscribe(
                        resp => {

                         // if (this.tMora[0] === this.campaigns.tipo_mora) {
                          if (mora === "30") {

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

                          } if (mora === "60") { // mora 60



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

                          } if (mora === "90") {  // mora 90



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

                                console.log('ENVIO DE CORREO CON MORA 90');

                                this.send(correo, nombre_cliente, business);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } else if (mora === "120"){   //MORA 120




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

                              // if (pagosVencidos === 4)
                              if (pagosVencidos >= 4) {

                                console.log('ENVIO DE CORREO CON MORA 120');

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

                      // altamira
                      this.service.getDataClienteAltamiraClienteMora()
                      .subscribe(
                        resp => {

                         // if (this.tMora[0] === this.campaigns.tipo_mora) {
                          if (mora === "30") {

                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Funeraria Altamira";
                            this.campaigns.business = "Funeraria Altamira";
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

                          } if (mora === "60") { // mora 60



                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Funeraria Altamira";
                            this.campaigns.business = "Funeraria Altamira";
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

                          } if (mora === "90") {  // mora 90



                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Funeraria Altamira";
                            this.campaigns.business = "Funeraria Altamira";
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

                                console.log('ENVIO DE CORREO CON MORA 90');

                                this.send(correo, nombre_cliente, business);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } else if (mora === "120"){   //MORA 120

                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Funeraria Altamira";
                            this.campaigns.business = "Funeraria Altamira";
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

                              // if (pagosVencidos === 4)
                              if (pagosVencidos >= 4) {

                                console.log('ENVIO DE CORREO CON MORA +120');

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

                      // indelpa

                      this.service.getDataClienteIndelpaClienteMora()
                      .subscribe(
                        resp => {

                         // if (this.tMora[0] === this.campaigns.tipo_mora) {
                          if (mora === "30") {

                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Indelpa";
                            this.campaigns.business = "Indelpa";
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

                          } if (mora === "60") { // mora 60



                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Indelpa";
                            this.campaigns.business = "Indelpa";
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

                          } if (mora === "90") {  // mora 90



                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Indelpa";
                            this.campaigns.business = "Indelpa";
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

                                console.log('ENVIO DE CORREO CON MORA 90');

                                this.send(correo, nombre_cliente, business);

                              } if (pagosVencidos === 0) {
                                console.log('CLIENTE NO ESTA EN MORA');

                              }

                              //this.send(correo, nombre_cliente, business);
                            }

                          } else if (mora === "120"){   //MORA 120

                            this.VarClienteMora = resp;
                            console.log(resp);


                            let correo = "";
                            let nombre_cliente = "";
                            let fecha_nacimiento = "";
                            let business = "Indelpa";
                            this.campaigns.business = "Indelpa";
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

                              // if (pagosVencidos === 4)
                              if (pagosVencidos >= 4) {

                                console.log('ENVIO DE CORREO CON MORA +120');

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
                      //alert("Todas las anteriores") 
                    }*/
                  }
                }
              } /*else if (campana === "Campaña Recordatorio de pago") {

                for (const key in this.ListaCampanas[i]) {

                  if (key === "business") {

                    empresa = this.ListaCampanas[i][key];



                    empresa = this.ListaCampanas[i][key];

                    if (empresa === "Cementerio la Resurreccion") {
                      // console.log( "enviando correo...");
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
                              console.log("correo enviado");

                            }
                          },
                          err => console.log(err)
                        )

                      for (const key in this.ListaCampanas[i]) {
                        if (key === "id") {

                          id = this.ListaCampanas[i][key];
                          console.log(id);

                        }
                      }

                    } else if (empresa === "Funeraria Las Flores") {
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
                    } else if (empresa === "Funeraria Altamira") {

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
                    } else if (empresa === "Indelpa") {
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
                    } else if (empresa === "Campaña para toda las empresas") {



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

                    }


                  }

                }

              }*/


            }
            /*if (key === "business") {
              empresa = this.ListaCampanas[i][key]; 
              this.campaigns.business = empresa.toString();             
              // console.log(nombre_cliente);
            }*/
          }

          for (const key in this.ListaCampanas[i]) {


          }


        }

      }
    )
    //}

  }

  /* if(empresa === this.empresass[0]) {
             
               
   
     this.service.getDataClienteFuneraria()
      .subscribe(
        resp => {
         console.log("proceso para enviar correo");
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
      //alert("eligio Funerales")
  
    
  
    }if(empresa === "Cementerio la Resurreccion"){
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
     // alert("eligio Cementerio")
  
    }else if (empresa === "Funeraria Altamira") {
  
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
  
      //alert("eligio altamira")
  
    }else if (empresa === "Indelpa") {
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
      //alert("eligio indelpa")
  
   } else {
    
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





  send(correo: string, nombre_cliente: string, busines: string, plantilla_id: number, fecha: string) {


    const data: birthDay = {

      to: [
        {
          email: correo,
          name: nombre_cliente
        }
      ],
      templateId: plantilla_id,
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
