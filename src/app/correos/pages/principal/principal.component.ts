import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Campaigns } from '../../interfaces/campaigns';
import { CorreoApiSendinblueService } from '../../services/correo-api-sendinblue.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements  OnInit {

 // dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  //dtTrigger = new Subject();
  dtTrigger: Subject<any> = new Subject<any>();

  campaignsMostrar: Campaigns[]=[]; // variable donde almacenamos las campañas desde bd
  router: any;
  sidenavService: any;
  sharedService: any;

  constructor(private service: CorreoApiSendinblueService) { }

  ngOnInit(): void {

    //this.getCampaigns();
    
    this.dtOptions ={
      pagingType: 'full_numbers',
      pageLength: 25,
      search:true, //agregado
      paging:true //agregado
    };
   // getCampaigns(){
      this.service.getCampaigns()
        .subscribe(
         res => {
          this.campaignsMostrar = res;
          this.dtTrigger.next(Subject);
         },
          err => console.log(err) 
    
        );


         
  
   // }

    
  }

  /*ngOnDestroy(): void {

    this.dtTrigger.unsubscribe();
    
  }*/

  

}
