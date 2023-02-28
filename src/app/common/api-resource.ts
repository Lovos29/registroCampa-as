import { Component } from '@angular/core';
export const API={
    consumeTemplate:'/test' // este hace referencia al service que esta dentro de la 
                            //carpeta consume-template de sendinblue-correos-api
}

export const HEADERS = {
    "X-Mailin-custom":'custom_header_1:custom_value_1|custom_header_2:custom_value_2|custom_header_3:custom_value_3',
    charset:'iso-8859-1'
}

export const PARAMS = {
  
     name: 'cliente',
     business: 'busines',
     fecha: 'fecha'
    //email: 'DtoCliente'
  //  customer:'customer',
   // message:'Message'
}



export const TEMPLATE_ID ={
     happyBirthdayTemplate: 4     //aqui van a ir los nombres de las plantillas o codigos de plantillas
}






    



