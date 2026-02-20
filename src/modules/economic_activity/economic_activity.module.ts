import { Module } from '@nestjs/common';
import { EconomicActivityService } from './economic_activity.service';
import { EconomicActivityController } from './economic_activity.controller';

@Module({
  controllers: [EconomicActivityController],
  providers: [EconomicActivityService],
})
export class EconomicActivityModule {}
