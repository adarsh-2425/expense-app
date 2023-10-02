import { Module } from '@nestjs/common';
import { SummaryController } from './summary.controller';

@Module({
  controllers: [SummaryController],
  providers: []
})
export class SummaryModule {}
