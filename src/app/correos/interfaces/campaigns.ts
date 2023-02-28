export interface Campaigns {
    id?: number;
    name_campaigns: string;
    id_plantilla: number;
    business: string;
    fecha_inicio: Date,
    fecha_fin: Date;
    status?: string;
    tipo_mora?: string;
}

export interface UpdateCampaigns {
    id?: number;
    name_campaigns: string;
    id_plantilla: number;
    business: string;
    fecha_inicio: Date,
    fecha_fin: Date;
    status?: string;
    tipo_mora?: string;
}
export interface SelectedEmpresas {
    
    FLF: string;
    FAM: string;
    GLR: string,
    IDP: string;
}