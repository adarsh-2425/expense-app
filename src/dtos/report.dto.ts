// npm install class-validator class-transformer
import {IsNumber, IsPositive, IsString, IsNotEmpty} from 'class-validator'; //we need to use some decorators from class-validator for validation
// ISNOtEmpty to verify user does not provide a empty string

export class CreateReportDto {
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsString()
    @IsNotEmpty()
    source: string;
}