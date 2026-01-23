import { IsOptional, IsArray } from 'class-validator';

export class UpdateHabilidadesDto {

  @IsOptional()
  @IsArray()
  generales?: string[];

  @IsOptional()
  @IsArray()
  especiales?: string[];
}
