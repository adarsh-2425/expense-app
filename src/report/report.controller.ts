import { Controller, Delete, Get, Param, Post, Put, Body, HttpCode, ParseUUIDPipe, ParseEnumPipe } from "@nestjs/common"
import { ReportType, data } from 'src/data';
import { v4 as uuid } from 'uuid';
import { ReportService } from "./report.service";
import { CreateReportDto, ReportResponseDto, UpdateReportDto } from "src/dtos/report.dto";

@Controller('report/:type') // Controller decorator now gives the current entity to be a controller
export class ReportController {

  constructor(private readonly reportService: ReportService){}

  @Get() // This decorator allows the below method to return as GET endpoint
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; // checking the type in parameter. if "income", we assign type INCOME and vice versa
    return this.reportService.getAllReports(reportType);
  }

  @Get(':id') 
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; // checking the type in parameter. if "income", we assign type INCOME and vice versa
    return this.reportService.getReportById(reportType, id);
    };

  @Post()
  createReport(@Body() { amount, source }: CreateReportDto,
   @Param('type') type: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.createReport(reportType, {amount, source})
  }

  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto
  ): ReportResponseDto {
    console.log(body)
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; // checking the type in parameter. if "income", we assign type INCOME and vice versa
    
    return this.reportService.updateReport(reportType, id, body)
    }

  @HttpCode(204) // 204 means No Content, this controller will return 204
  @Delete(':id')
  deleteReport(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    this.reportService.deleteREeport(id)
  }
}