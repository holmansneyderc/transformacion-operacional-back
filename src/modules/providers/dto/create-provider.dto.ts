import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsEmail, IsInt, IsArray, ArrayMinSize, ValidateNested } from 'class-validator';
import { CreateContactDto } from '../../contacts/dto/create-contact.dto';
import { CreateBranchDto } from '../../branches/dto/create-branch.dto';
import { CreateDocumentDto } from 'src/modules/documents/dto/create-document.dto';
import { CreateScoreDto } from 'src/modules/scores/dto/create-score.dto';
import { CreateHistoricStateDto } from 'src/modules/historic_state/dto/create-historic_state.dto';

export class CreateProviderDto {
    @IsString()
    @IsNotEmpty()
    razon_social: string;

    @IsString()
    @IsNotEmpty()
    nit: string;

    @IsEmail()
    @IsNotEmpty()
    correo: string;

    @IsInt()
    @IsNotEmpty()
    estado_id: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateContactDto)
    contactos: CreateContactDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateBranchDto)
    sucursales: CreateBranchDto[]
    
    @IsArray()
    @IsInt({ each: true })
    lineas: number[];
    
    @IsArray()
    @IsInt({ each: true })
    actividades: number[];
    
    @IsArray()
    @IsInt({ each: true })
    habilidades_especiales: number[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateDocumentDto)
    documentos: CreateDocumentDto[]

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateScoreDto)
    scores: CreateScoreDto[]

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateHistoricStateDto)
    historico_estado_proveedor: CreateHistoricStateDto[]
}
