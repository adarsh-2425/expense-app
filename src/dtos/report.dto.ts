// npm install class-validator class-transformer
import {IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional} from 'class-validator'; //we need to use some decorators from class-validator for validation
import { Exclude, Expose } from 'class-transformer'; // for update dto. exclude allows us to omit some properties
import { ReportType } from 'src/data';
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

export class ReportResponseDto {
    id: string;
    source: string;
    amount: number;

    @Expose({name: 'createdAt'})
    transformCreatedAt() {
        return this.created_at; // this will convert created_at to createdAt
    }

    @Exclude()
    created_at: Date;

    @Exclude() //will exclude updated_at when sending response back 
    updated_at: Date;
    type: ReportType

    constructor(partial: Partial<ReportResponseDto>){ // now we can pass any object which is similar to this. it can be partial too, not include everything
        Object.assign(this, partial)
    }
}