export interface SendiblueAPIRequest {
    to:         To[];
    templateId: number;
    params:     Params;
    headers:    Headers;
}

export interface Headers {
    "X-Mailin-custom": string;
    charset:           string;
}
 
export interface Params {
     name: string;
     business: string;
     fecha: string;
    // email: string;
   // message: string;
}

export interface To {
    email: string;
    name:  string;
}
 