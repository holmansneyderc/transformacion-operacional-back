export class Provider {
    id: number;
    razon_social: string;
    nit: string;
    correo: string;
    estado_id: number;   

    constructor(partial: Partial<Provider>) {
        Object.assign(this, partial);
  }
}
