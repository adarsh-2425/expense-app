import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { ReportType, data } from 'src/data'

@Controller('report/:type') // Controller decorator now gives the current entity to be a controller
export class AppController {
  @Get() // This decorator allows the below method to return as GET endpoint
  getAllReports(@Param('type') type: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; // checking the type in parameter. if "income", we assign type INCOME and vice versa
    return data.report.filter(report => report.type === reportType)
  }

  @Get(':id') 
  getAllReportsById(
    @Param('type') type: string,
    @Param('id') id: string
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; // checking the type in parameter. if "income", we assign type INCOME and vice versa
    return data.report
      .filter(report => report.type === reportType)
      .find(report => report.id === id)
    };

  @Post()
  createReport() {
    return 'post ok. status 201'
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'delete ok. status 200'
  }
}