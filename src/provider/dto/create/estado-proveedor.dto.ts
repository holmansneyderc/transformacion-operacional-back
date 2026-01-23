import { IsIn, IsOptional, IsString } from 'class-validator';

export class EstadoProveedorDto {
  @IsIn(['ACTIVO', 'SUSPENDIDO', 'RETIRADO'])
  estado: 'ACTIVO' | 'SUSPENDIDO' | 'RETIRADO';

  @IsOptional()
  @IsString()
  subRazon?: string;
}
