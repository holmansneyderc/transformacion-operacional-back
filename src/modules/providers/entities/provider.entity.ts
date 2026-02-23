import { LineProvider } from "src/modules/line_provider/entities/line_provider.entity";
import { Branch } from "../../branches/entities/branch.entity";
import { Contact } from "../../contacts/entities/contact.entity";
import { HistoricState } from "src/modules/historic_state/entities/historic_state.entity";

export class Provider {
  id: number;
  razon_social: string;
  nit: string;
  correo: string;
  estado_id: number;
  estado?: { id: number; nombre: string };
  contactos?: Contact[];
  sucursales?: Branch[];
  lineas?: LineProvider[];
  actividades?: any[];
  documentos?: any[];
  historico_estado_proveedor?: HistoricState[];

  constructor(partial: Partial<Provider>) {
    Object.assign(this, partial);
  }
}