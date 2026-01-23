import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateEstadoProveedorDto } from '../index';
import { UpdateInformacionGeneralDto } from '../index';
import { UpdateHabilidadesDto  } from '../index';
import { UpdateRepresentanteLegalDto } from '../index';
import { UpdateDocumentosDto } from '../index';

export class UpdateProviderDto {

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateEstadoProveedorDto)
  estadoProveedor?: UpdateEstadoProveedorDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateInformacionGeneralDto)
  informacionGeneral?: UpdateInformacionGeneralDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateRepresentanteLegalDto)
  representanteLegal?: UpdateRepresentanteLegalDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateHabilidadesDto)
  habilidades?: UpdateHabilidadesDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateDocumentosDto)
  documentos?: UpdateDocumentosDto;

}
