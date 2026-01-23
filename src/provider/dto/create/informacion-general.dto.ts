import { IsArray, IsOptional, IsString, IsNotEmpty, IsEmail, IsIn } from 'class-validator';

export class InformacionGeneralDto {
  @IsString()
  @IsNotEmpty()
  razonSocial: string;

  @IsString()
  @IsNotEmpty()
  nit: string;

  @IsString()
  direccionCorrespondencia: string;

  @IsArray()
  @IsString({ each: true })
  lineaNegocio: string[];

  @IsIn(['Natural', 'Jurídica'])
  tipoPersona: 'Natural' | 'Jurídica';

  @IsOptional()
  actividadEconomicaRues: string | string[];

  @IsEmail()
  correoEmpresa: string;
}
