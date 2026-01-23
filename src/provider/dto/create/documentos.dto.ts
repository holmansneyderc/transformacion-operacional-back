import { IsBoolean, IsString, IsEmail } from 'class-validator';

export class DocumentosDto {
  @IsString()
  fechaContrato: string;

  @IsString()
  fechaActivacion: string;

  @IsString()
  contrato: string;

  @IsString()
  sagrilaft: string;

  @IsString()
  cartaTratamientoDatos: string;

  @IsString()
  sst: string;

  @IsEmail()
  correoLider: string;

  @IsBoolean()
  siab: boolean;
}

