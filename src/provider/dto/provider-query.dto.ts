import { IsIn, IsOptional, IsString, IsNotEmpty, Min, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class ProviderQueryDto {

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  pageSize?: number;

  @IsOptional()
  @IsString()
  sort?: string;

  @IsOptional()
  @IsIn(['ACTIVO', 'SUSPENDIDO', 'RETIRADO'])
  estado?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  linea?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  departamento?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  ciudad?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  habilidadGeneral?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  habilidadEspecial?: string;
}
