import { IsArray, IsString } from 'class-validator';

export class SucursalDto {
  @IsString()
  departamento: string;

  @IsString()
  ciudad: string;

  @IsString()
  direccion: string;

  @IsArray()
  @IsString({ each: true })
  telefonosContacto: string[];
}
