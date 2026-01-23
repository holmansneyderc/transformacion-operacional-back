import { IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateEstadoProveedorDto {
  @IsIn(['ACTIVO', 'SUSPENDIDO', 'RETIRADO'])
  estado: 'ACTIVO' | 'SUSPENDIDO' | 'RETIRADO';

  @IsOptional()
  @IsString()
  subRazon?: string;

  @IsOptional()
  @IsString()
  fechaReactivacion?: string;
}
