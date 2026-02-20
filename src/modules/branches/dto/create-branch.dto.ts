import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateBranchDto {
    @IsString()
    @IsNotEmpty()
    direccion: string;

    @IsInt()
    @IsNotEmpty()
    ciudad_id: number;

    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    telefonos: string[];
}
