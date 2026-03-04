import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessLineModule } from './modules/business_line/business_line.module';
import { ProvidersModule } from './modules/providers/providers.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { BranchesModule } from './modules/branches/branches.module';
import { CityModule } from './modules/city/city.module';
import { LineProviderModule } from './modules/line_provider/line_provider.module';
import { ActivitiesProviderModule } from './modules/activities_provider/activities_provider.module';
import { EconomicActivityModule } from './modules/economic_activity/economic_activity.module';
import { DocumentsModule } from './modules/documents/documents.module';
import { ScoresModule } from './modules/scores/scores.module';
import { HistoricStateModule } from './modules/historic_state/historic_state.module';
import { TechnicianModule } from './modules/technician/technician.module';

@Module({
  imports: [BusinessLineModule, ProvidersModule, ContactsModule, BranchesModule, CityModule, LineProviderModule, ActivitiesProviderModule, EconomicActivityModule, DocumentsModule, ScoresModule, HistoricStateModule, TechnicianModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}