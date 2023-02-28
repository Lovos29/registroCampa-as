import { DataClienteFallecidos, DataClienteMoroso, Empresa } from './../interfaces/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from 'src/app/common/api-resource';
import { environment } from 'src/environments/environment';
import { SendiblueAPIRequest } from 'src/app/correos/interfaces/seniblue-request.interface';
import { SendiblueAPIResponse } from 'src/app/correos/interfaces/seniblue-response.interface';
import { DataCliente } from '../interfaces/cliente'
import { ReqResResponse } from '../interfaces/cliente'
import { Campaigns, UpdateCampaigns } from 'src/app/correos/interfaces/campaigns'





@Injectable({
  providedIn: 'root'
})
export class CorreoApiSendinblueService {

  private apiUrl = environment.apiUrl + API.consumeTemplate; // conecion a  la API  de sendinblue

  private conectionData = environment.apiUrlPosgres; // Aqui realizamos la coneccion a posgressql

  private conectionCrudCampaigns = environment.apiUrlCrudCampaigns;

  private ingresar: boolean = false;

  constructor(private http: HttpClient) { }

  sendCorreo(request: SendiblueAPIRequest): Observable<SendiblueAPIResponse> {
    console.log(request);
    return this.http.post<SendiblueAPIResponse>(this.apiUrl, request);
  }

  // REALIZAMOS CONSULTAS A LAS BASES DE DATOS DE PRODUCCION GLR
  getDataCliente(): Observable<DataCliente[]> {

    return this.http.get<DataCliente[]>(`${this.conectionData}/tasks`);
  }
  
  getDataClienteCementerioClienteMora(): Observable<DataClienteMoroso[]> { //prueba de BD Virtual

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/tasks-cartera`);
  }

  getDataClienteCementerioClienteMoraAlDia(): Observable<DataClienteMoroso[]> { 

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/tasks-cartera-aldia`);
  }

  getDataClienteCementerioClienteMoraTreinta(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/tasks-cartera-treinta`);
  }

  getDataClienteCementerioClienteMoraSesenta(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/tasks-cartera-sesenta`);
  }

  getDataClienteCementerioClienteMoraNoventa(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/tasks-cartera-noventa`);
  }

  getDataClienteCementerioClienteMoraCientoVeinte(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/tasks-cartera-cientoveinte`);
  }

  getDataClienteCementerioClienteMoraMasCientoVeinte(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/tasks-cartera-mascientoveinte`);
  }
  
  getDataClienteFallecidos(): Observable<DataClienteFallecidos[]> {

    return this.http.get<DataClienteFallecidos[]>(`${this.conectionData}/tasks-aniversario-fallecidos`);
  }

  getDataClienteNotifications(): Observable<DataClienteFallecidos[]> {

    return this.http.get<DataClienteFallecidos[]>(`${this.conectionData}/tasks-notifications-events`);
  }


  getDataClienteFuneraria(): Observable<DataCliente[]> {

    return this.http.get<DataCliente[]>(`${this.conectionData}/funeraria`);
  }

  getDataClienteFunerariaFallecidos(): Observable<DataClienteFallecidos[]> {

    return this.http.get<DataClienteFallecidos[]>(`${this.conectionData}/funeraria-aniversario-fallecidos`);
  }

  getDataClienteFunerariaNotifications(): Observable<DataClienteFallecidos[]> {

    return this.http.get<DataClienteFallecidos[]>(`${this.conectionData}/funeraria-notifications-events`);
  }

  getDataClienteFunerariaClienteMoraAlDia(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/funeraria-cartera`);
  }

  getDataClienteFunerariaClienteMoraTreinta(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/funeraria-cartera-treinta`);
  }

  getDataClienteFunerariaClienteMoraSesenta(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/funeraria-cartera-sesenta`);
  }

  getDataClienteFunerariaClienteMoraNoventa(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/funeraria-cartera-noventa`);
  }
  
  getDataClienteFunerariaClienteMoraCientoVeinte(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/funeraria-cartera-cientoveinte`);
  }

  getDataClienteFunerariaClienteMoraMasCientoVeinte(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/funeraria-cartera-mascientoveinte`);
  }

  getDataClienteAltamira(): Observable<DataCliente[]> {

    return this.http.get<DataCliente[]>(`${this.conectionData}/altamira`);
  }

  getDataClienteAltamiraFallecidos(): Observable<DataClienteFallecidos[]> {

    return this.http.get<DataClienteFallecidos[]>(`${this.conectionData}/altamira-aniversario-fallecidos`);
  }
  getDataClienteAltamiraNotifications(): Observable<DataClienteFallecidos[]> {

    return this.http.get<DataClienteFallecidos[]>(`${this.conectionData}/altamira-notifications-events`);
  }

  getDataClienteAltamiraClienteMoraAlDia(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/altamira-cartera`);
  }

  getDataClienteAltamiraClienteMoraTreinta(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/altamira-cartera-treinta`);
  }

  getDataClienteAltamiraClienteMoraSesenta(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/altamira-cartera-sesenta`);
  }

  getDataClienteAltamiraClienteMoraNoventa(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/altamira-cartera-noventa`);
  }

  getDataClienteAltamiraClienteMoraCientoVeinte(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/altamira-cartera-cientoveinte`);
  }

  getDataClienteAltamiraClienteMoraMasCientoVeinte(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/altamira-cartera-mascietoveinte`);
  }


  getDataClienteIndelpa(): Observable<DataCliente[]> {

    return this.http.get<DataCliente[]>(`${this.conectionData}/indelpa`);
  }

  getDataClienteIndelpaFallecidos(): Observable<DataClienteFallecidos[]> {

    return this.http.get<DataClienteFallecidos[]>(`${this.conectionData}/indelpa-aniversario-fallecidos`);
  }

  getDataClienteIndelpaNotifications(): Observable<DataClienteFallecidos[]> {

    return this.http.get<DataClienteFallecidos[]>(`${this.conectionData}/indelpa-notifications-events`);
  }
  getDataClienteIndelpaClienteMoraAlDia(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/indelpa-cartera`);
  }

  getDataClienteIndelpaClienteMoraTreinta(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/indelpa-cartera-treinta`);
  }

  getDataClienteIndelpaClienteMoraSesenta(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/indelpa-cartera-sesenta`);
  }

  getDataClienteIndelpaClienteMoraNoventa(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/indelpa-cartera-noventa`);
  }

  getDataClienteIndelpaClienteMoraCientoVeinte(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/indelpa-cartera-cientoveinte`);
  }

  getDataClienteIndelpaClienteMoraMasCientoVeinte(): Observable<DataClienteMoroso[]> {

    return this.http.get<DataClienteMoroso[]>(`${this.conectionData}/indelpa-cartera-mascientoveinte`);
  }


  empresass: Empresa[] = [
    {
      id: 1,
      name: "Funeraria Las Flores"
    },
    {
      id: 2,
      name: "Funeraria Altamira"
    },
    {
      id: 3,
      name: "Cementerio la Resurreccion"
    },
    {
      id: 4,
      name: "Indelpa"
    },
    {
      id: 5,
      name: "Campaña para toda las empresas"
    }

  ];

  getempresa(): Empresa[] {
    return this.empresass;
  }

  // PARA REALIZAR EL CRUD DE LAS CAMPAÑAS
  getCampaigns(): Observable<Campaigns[]> {
    return this.http.get<Campaigns[]>(`${this.conectionCrudCampaigns}/campanas`);

  }
  getCampaign(id: number): Observable<Campaigns[]> {
    return this.http.get<Campaigns[]>(`${this.conectionCrudCampaigns}/campanas/${id}`);

  }
  createCampaigns(campaigns: Campaigns): Observable<Campaigns> {
    return this.http.post<Campaigns>(`${this.conectionCrudCampaigns}/campanas`, campaigns);

  }

  deleteCampaigns(id: number): Observable<Campaigns> {
    return this.http.delete<Campaigns>(`${this.conectionCrudCampaigns}/campanas/${id}`,)
  }

  updateCampaigns(id: number, campaigns:Campaigns): Observable<UpdateCampaigns> {
    return this.http.put<Campaigns>(`${this.conectionCrudCampaigns}/campanas/${id}`, campaigns);
    // return this.http.put<Campaigns>(`${this.conectionCrudCampaigns}/campanas/update?productID=${id}`,campaigns);
  }


  // PARA REALIZAR EL LOGIN AL SISTEMA
  public ingresarAplicativo(obj: any): boolean {
    this.ingresar = obj.username == 'renan' && obj.password == '123';
    
    return this.ingresar;

  }
  public habilitarlogeo() {  
    return this.ingresar;
  }



  
  cerrarSesion(){
 this.ingresar= false
    return this.ingresar
  }

  public Salir() { 
    return this.ingresar;
  }



}
