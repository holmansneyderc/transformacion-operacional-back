import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class UpdateRepresentanteLegalDto {

  @IsOptional()
  @IsString()
  celular?: string;

  @IsOptional()
  @IsString()
  correo?: string;

  @IsOptional()
  @IsBoolean()
  esGerente?: boolean;
}
