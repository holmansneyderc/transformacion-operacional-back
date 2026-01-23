import { Controller, Get, Query, Patch, Body, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProvidersService } from './provider.service';
import { ProviderQueryDto } from './dto/index';
import { CreateProviderDto } from './dto/index';

@Controller('proveedores')
export class ProvidersController {
  constructor(
    private readonly providersService: ProvidersService,
  ) {}

  @Get()
  findAll(@Query() query: ProviderQueryDto) {
    return this.providersService.findAll(query);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any,
  ) {
    return this.providersService.update(id, body);
  }

  @Post()
  create(@Body() dto: CreateProviderDto) {
    return this.providersService.create(dto);
  }

}
