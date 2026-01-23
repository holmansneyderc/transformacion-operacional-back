import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { InformacionGeneralDto } from '../index';
import { RepresentanteLegalDto } from '../index';
import { SucursalDto } from '../index';
import { HabilidadesDto } from '../index';
import { DocumentosDto } from '../index';
import { EstadoProveedorDto } from '../index';

export class CreateProviderDto {

  @ValidateNested()
  @Type(() => InformacionGeneralDto)
  informacionGeneral: InformacionGeneralDto;
  
  @ValidateNested()
  @Type(() => RepresentanteLegalDto)
  representanteLegal: RepresentanteLegalDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SucursalDto)
  sucursales: SucursalDto[];

  @ValidateNested()
  @Type(() => HabilidadesDto)
  habilidades: HabilidadesDto;

  @ValidateNested()
  @Type(() => DocumentosDto)
  documentos: DocumentosDto;

  @ValidateNested()
  @Type(() => EstadoProveedorDto)
  estadoProveedor: EstadoProveedorDto;
}
