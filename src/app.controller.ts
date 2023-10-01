import {Controller, Delete, Get, Post} from "@nestjs/common"

@Controller('report/:type') // Controller decorator now gives the current entity to be a controller
export class AppController {
  @Get() // This decorator allows the below method to return as GET endpoint
  getAllIncomeReports() {
    return [];
  }

  @Get(':id') 
  getAllIncomeReportsById() {
    return {};
  }

  @Post()
  postIncomeReports() {
    return 'post ok. status 201'
  }

  @Delete(':id')
  deleteIncomeReports() {
    return 'delete ok. status 200'
  }
}