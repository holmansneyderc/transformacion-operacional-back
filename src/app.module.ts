import { Module } from '@nestjs/common';
import { ProvidersModule } from './provider/provider.module';

@Module({
  imports: [ProvidersModule],
})
export class AppModule {}



