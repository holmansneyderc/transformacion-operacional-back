import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDocumentDto {
    @IsInt()
    @IsNotEmpty()
    documento_id: number;

    @IsString()
    @IsNotEmpty()
    url: string;
}
