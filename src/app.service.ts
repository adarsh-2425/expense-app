import {ReportType, data} from 'src/data';
import { Injectable } from '@nestjs/common';

export class AppService {
  getAllReports(type: ReportType) {
    return data.report.filter(report => report.type === type)
  }
}