import { City } from "../../city/entities/city.entity";

export class Branch {
    id: number;
    direccion: string;
    ciudad_id: number;
    proveedor_id: number;

    ciudad?: City;
    telefonos?: any[];

    constructor(partial: Partial<Branch>) {
        Object.assign(this, partial);
  }
}
