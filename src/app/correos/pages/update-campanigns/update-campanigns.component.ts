
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Campaigns, UpdateCampaigns } from '../../interfaces/campaigns';
import { CorreoApiSendinblueService } from '../../services/correo-api-sendinblue.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-update-campanigns',
  templateUrl: './update-campanigns.component.html',
  styleUrls: ['./update-campanigns.component.css']
})
export class UpdateCampanignsComponent implements OnInit {



  datosClientes: any[] = [];
  selectedEmpresas: string[] = [];
  busines = this.selectedEmpresas.toString(); 
  selectedEstado: string[] = [];
  estados:string[] = ["Activado","Desactivado"]
  empresass: string[] = ["Funeraria Las Flores", "Cementerio la Resurreccion", "Funeraria Altamira", "Indelpa"];
  mivariable: String = "h"
  tMora: string[]=["30", "60", "90", "120", "+120", "NO APLICA"];
  tMoraSelected: string[] =  [];


  idcampaigns: any={
    id: 0

  }

  
  campaigns: Campaigns = {

    name_campaigns: '',
    id_plantilla: 0,
    business: '',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    //fecha_inicio: '',
    //fecha_fin: '',
    status: ' ',
    tipo_mora: ''

  };

  constructor(
    private service: CorreoApiSendinblueService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  
    const params= this.activateRoute.snapshot.params; 
    console.log(params);
    
    
    if(params){
      this.service.getCampaign(params['id'])
      .subscribe(
        res =>{
         console.log(res);  

          this.datosClientes = res
          console.log(this.datosClientes);

          this.campaigns = res[0]
          
          /*
       for (let i = 0; i < this.datosClientes.length; i++) {


          for (const key in this.datosClientes[i]) {
            //console.log(this.datosClientes[0][key]);

            if (key === "id") {
              // console.log(this.datosCliente[i][key]);

              this.idcampaigns= this.datosClientes[i][key];
          
            }
            if (key === "name_campaigns") {
             console.log(this.datosClientes[i][key]);

              //this.campaigns.name_campaigns = this.datosClientes[i][key];
          
            }
            if (key === "business") {
              // console.log(this.datosCliente[i][key]);

              this.campaigns.business= this.datosClientes[i][key];
          
            }
            if (key === "fecha_inicio") {
              // console.log(this.datosCliente[i][key]);

              this.campaigns.fecha_inicio= this.datosClientes[i][key];
          
            }
            if (key === "fecha_fin") {
              // console.log(this.datosCliente[i][key]);

              this.campaigns.fecha_fin= this.datosClientes[i][key];
          
            }
            if (key === "status") {
              // console.log(this.datosCliente[i][key]);

              this.campaigns.status= this.datosClientes[i][key];
          
            }
            if (key === "id_plantilla") {
              // console.log(this.datosCliente[i][key]);

              this.campaigns.id_plantilla= this.datosClientes[i][key];
          
            }
            if (key === "tipo_mora") {
              // console.log(this.datosCliente[i][key]);

              this.campaigns.tipo_mora= this.datosClientes[i][key];
          
            }
            
          }
          //this.send(correo, nombre_cliente, business);
        }   
         //this.campaigns.name_campaigns = res.name_campaigns;
        */
      
        }        
      )
    }
  }

 updateCampanigns(){
  

  if(this.empresass[0] === this.selectedEmpresas[0]){
    let empresa = "Funeraria Las Flores";

    this.campaigns.business = empresa;

    console.log(this.campaigns.business);

  }if(this.empresass[1] === this.selectedEmpresas[0]){
    let empresa = "Cementerio la Resurreccion";
    this.campaigns.business = empresa;
    console.log(this.campaigns.business);
  }if(this.empresass[2] === this.selectedEmpresas[0]){
    let empresa = "Funeraria Altamira";
    this.campaigns.business = empresa;
    console.log(this.campaigns.business);
  }if(this.empresass[3] === this.selectedEmpresas[0]){
    let empresa = "Indelpa";
    this.campaigns.business = empresa;
    console.log(this.campaigns.business);
  }
  
  /*if(this.empresass[4] === this.selectedEmpresas[0]){
    let empresa = "Campaña para toda las empresas";
    this.campaigns.business = empresa;
    console.log(this.campaigns.business);
  }*/
    
  if(this.campaigns.id === this.campaigns.id){
      console.log(this.campaigns.id + ' id array');
      this.idcampaigns = this.campaigns.id;
         
      }  

      console.log(this.idcampaigns +' id');

      delete this.campaigns.id
      this.service.updateCampaigns(this.idcampaigns, this.campaigns)
      .subscribe(
        res =>{
          console.log(res);
          Swal.fire({
           // position: 'top-end',
            icon: 'info',
            title: 'Campaña actualizada',
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
      );

 
  }

}
