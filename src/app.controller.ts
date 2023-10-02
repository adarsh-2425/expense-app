import { Controller, Delete, Get, Param, Post, Put, Body, HttpCode, ParseUUIDPipe, ParseEnumPipe } from "@nestjs/common"
import { ReportType, data } from 'src/data';
import { v4 as uuid } from 'uuid';
import { AppService } from "./app.service";

@Controller('report/:type') // Controller decorator now gives the current entity to be a controller
export class AppController {

  constructor(private readonly appService: AppService){}

  @Get() // This decorator allows the below method to return as GET endpoint
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; // checking the type in parameter. if "income", we assign type INCOME and vice versa
    return this.appService.getAllReports(reportType);
  }

  @Get(':id') 
  getAllReportsById(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; // checking the type in parameter. if "income", we assign type INCOME and vice versa
    return this.appService.getReportById(reportType, id);
    };

  @Post()
  createReport(@Body() { amount, source }: {amount: number, source: string}, @Param('type') type: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.createReport(reportType, {amount, source})
  }

  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: { amount: number, source: string }
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; // checking the type in parameter. if "income", we assign type INCOME and vice versa
    
    this.appService.updateReport(reportType, id, body)
    }

  @HttpCode(204) // 204 means No Content, this controller will return 204
  @Delete(':id')
  deleteReport(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    this.appService.deleteREeport(id)
  }
}