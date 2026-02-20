import { Module } from '@nestjs/common';
import { HistoricStateService } from './historic_state.service';
import { HistoricStateController } from './historic_state.controller';

@Module({
  controllers: [HistoricStateController],
  providers: [HistoricStateService],
})
export class HistoricStateModule {}
