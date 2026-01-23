import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class RepresentanteLegalDto {
  @IsString()
  nombre: string;

  @IsString()
  tipoDocumento: string;

  @IsString()
  numeroDocumento: string;

  @IsString()
  celular: string;

  @IsEmail()
  correo: string;

  @IsBoolean()
  esGerente: boolean;
}
