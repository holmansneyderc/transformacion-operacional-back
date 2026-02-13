import { Module } from '@nestjs/common';
import { BusinessLineService } from './business_line.service';
import { BusinessLineController } from './business_line.controller';

@Module({
  controllers: [BusinessLineController],
  providers: [BusinessLineService],
})
export class BusinessLineModule {}
