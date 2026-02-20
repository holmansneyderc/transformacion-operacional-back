import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineProviderService } from './line_provider.service';
import { CreateLineProviderDto } from './dto/create-line_provider.dto';
import { UpdateLineProviderDto } from './dto/update-line_provider.dto';

@Controller('line-provider')
export class LineProviderController {
  constructor(private readonly lineProviderService: LineProviderService) {}

  @Post()
  create(@Body() createLineProviderDto: CreateLineProviderDto) {
    return this.lineProviderService.create(createLineProviderDto);
  }

  @Get()
  findAll() {
    return this.lineProviderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lineProviderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLineProviderDto: UpdateLineProviderDto) {
    return this.lineProviderService.update(+id, updateLineProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lineProviderService.remove(+id);
  }
}
