import { Controller, Delete, Get, Post, Put } from "@nestjs/common"

@Controller('report/:type') // Controller decorator now gives the current entity to be a controller
export class AppController {
  @Get() // This decorator allows the below method to return as GET endpoint
  getAllReports() {
    return [];
  }

  @Get(':id') 
  getAllReportsById() {
    return {};
  }

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