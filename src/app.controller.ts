import {Controller, Get} from "@nestjs/common"

@Controller() // This decorator now gives the current entity to be a controller
export class AppController {
  @Get() // This decorator allows the below method to return as GET endpoint
  getAllIncomeReports() {
    return []
  }
}