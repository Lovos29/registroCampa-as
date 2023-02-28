// esta interfas sirve para guardar un dato en la tabla de mi base de datos
export interface DataCliente {

    id?: number;
    name: string;
    email: string;
    fecha_nacimiento?: Date;
}

export interface DataClienteFallecidos {

    id?: number;
    name_dead_related: string;
    email: string;
    death_datetime?: Date;
}



export interface DataClienteMoroso {

    id?: number;
    nombre_cliente: string;
    email: string;
    fecha_nacimiento?: Date;
    estado_contrato: string;
    capital_en_mora_del_contrato: number;
    intereses_y_pago_adicional_acumulados: number;
    total_monto_para_estar_al_dia: number;
    numero_de_pagos_vencidos: number; 
    valor_de_pagos_vencidos: number;
    ultima_fecha_de_pago: Date;
    ultimo_vencimiento_pagado: Date;
    fecha_actual_del_plan_teorico: Date;
    pago_total_teorico: number;
}


export interface ReqResResponse {
    id?:              number;
    email:            string;
    name:             string;
    fecha_nacimiento?: Date ;
}

export interface Empresa {

    id: number;
    name: String;

}


/*

export interface ReqResResponse {
    command:    string;
    rowCount:   number;
    oid:        null;
    rows:       Row[];
    fields:     Field[];
    _parsers:   null[];
    _types:     ReqResResponseTypes;
    RowCtor:    null;
    rowAsArray: boolean;
}

export interface ReqResResponseTypes {
    _types: TypesTypes;
    text:   Binary;
    binary: Binary;
}

export interface TypesTypes {
    arrayParser: Binary;
    builtins:    { [key: string]: number };
}

export interface Binary {
}

export interface Field {
    name:             string;
    tableID:          number;
    columnID:         number;
    dataTypeID:       number;
    dataTypeSize:     number;
    dataTypeModifier: number;
    format:           string;
}

export interface Row {
    email:            string;
    name:             string;
    fecha_nacimiento: Date | null;
}
*/