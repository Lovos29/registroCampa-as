/*const { Pool } = require ('pg');
const { async } = require('rxjs');

export const config = {

    user:'openerp',
    host:'192.168.100.240',
    password:'openuser',
    database:'CementerioProd',
   port: '5432'
}
const pool = new Pool (config);

//export const clienteCorreo = clienteCorreo;

export const customer = async () =>{
   clienteCorreo: String = "";
    

    try{
        const customer =  await pool.query("select email from res_partner where name = 'Cliente Demo' ");
        console.log(customer.rows);
        clienteCorreo = customer;
       return clienteCorreo = customer;

    }catch(e){

        console.log(e  );
    }  
}
//customer();


export const clientename = clientename;

export const email = async () =>{
    clientename: String = "";
    try{
        const email =  await pool.query("select email from res_partner where name = and 'Cliente Demo Medicos' ");
    console.log(email.rows);
   clientename = email;
    }catch(e){

        console.log(e );
    }  
}
email();*/