import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateScoreDto {
    @IsInt()
    @IsNotEmpty()
    habilidad_id: number;
}
