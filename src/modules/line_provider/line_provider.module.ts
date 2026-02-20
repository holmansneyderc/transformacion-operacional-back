import { Module } from '@nestjs/common';
import { LineProviderService } from './line_provider.service';
import { LineProviderController } from './line_provider.controller';

@Module({
  controllers: [LineProviderController],
  providers: [LineProviderService],
})
export class LineProviderModule {}
