// npm install class-validator class-transformer
import {IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional} from 'class-validator'; //we need to use some decorators from class-validator for validation
// ISNOtEmpty to verify user does not provide a empty string
// IsOptional will ensure even if one of the fields are empty, it can proceed without throwing error

export class CreateReportDto {
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsString()
    @IsNotEmpty()
    source: string;
}

export class UpdateReportDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string;
}