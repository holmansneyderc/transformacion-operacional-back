import { IsOptional, IsBoolean, IsString } from 'class-validator';

export class UpdateDocumentosDto {

  @IsOptional()
  @IsBoolean()
  siab?: boolean;

  @IsOptional()
  @IsString()
  fechaActivacion?: string;
}
