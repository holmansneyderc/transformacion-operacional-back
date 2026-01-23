import { Module } from '@nestjs/common';
import { ProvidersController } from './provider.controller';
import { ProvidersService } from './provider.service';

@Module({
  controllers: [ProvidersController],
  providers: [ProvidersService],
})
export class ProvidersModule {}
