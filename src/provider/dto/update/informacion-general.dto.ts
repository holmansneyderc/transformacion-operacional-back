import { IsOptional, IsString, IsArray } from 'class-validator';

export class UpdateInformacionGeneralDto {

  @IsOptional()
  @IsString()
  direccionCorrespondencia?: string;

  @IsOptional()
  @IsArray()
  lineaNegocio?: string[];

  @IsOptional()
  @IsString()
  tipoPersona?: string;

  @IsOptional()
  correoEmpresa?: string;

  @IsOptional()
  actividadEconomicaRues?: string | string[];
}
