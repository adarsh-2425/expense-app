import { Controller, Delete, Get, Param, Post, Put, Body } from "@nestjs/common"
import { ReportType, data } from 'src/data';
import { v4 as uuid } from 'uuid'

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
  createReport(@Body() { amount, source }: {amount: number, source: string}, @Param('type') type: string) {
    const newReport = {
      id: uuid(), // uuid() will generate a random string. installation => npm install uuid @types/uuid => import { v4 as uuid } from 'uuid'
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    }
    data.report.push(newReport)
    return newReport;
  }

  @Put(':id')
  updateReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() body: { amount: number, source: string }
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; // checking the type in parameter. if "income", we assign type INCOME and vice versa
    
    // finding if the provided report exists
    const reportToUpdate = data.report
      .filter(report => report.type === reportType)
      .find(report => report.id === id);

    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex(report => report.id === reportToUpdate.id);

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body
    };

    return data.report[reportIndex];
    }


  @Delete(':id')
  deleteReport() {
    return 'delete ok. status 200'
  }
}