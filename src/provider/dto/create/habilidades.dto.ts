import { IsArray, IsString } from 'class-validator';

export class HabilidadesDto {
  @IsArray()
  @IsString({ each: true })
  generales: string[];

  @IsArray()
  @IsString({ each: true })
  especiales: string[];
}
