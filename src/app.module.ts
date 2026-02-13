import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessLineModule } from './modules/business_line/business_line.module';
import { ProvidersModule } from './modules/providers/providers.module';

@Module({
  imports: [BusinessLineModule, ProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}