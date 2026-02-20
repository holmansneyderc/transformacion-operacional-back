import { Module } from '@nestjs/common';
import { ActivitiesProviderService } from './activities_provider.service';
import { ActivitiesProviderController } from './activities_provider.controller';

@Module({
  controllers: [ActivitiesProviderController],
  providers: [ActivitiesProviderService],
})
export class ActivitiesProviderModule {}
