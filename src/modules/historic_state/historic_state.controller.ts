import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoricStateService } from './historic_state.service';
import { CreateHistoricStateDto } from './dto/create-historic_state.dto';
import { UpdateHistoricStateDto } from './dto/update-historic_state.dto';

@Controller('historic-state')
export class HistoricStateController {
  constructor(private readonly historicStateService: HistoricStateService) {}

  @Post()
  create(@Body() createHistoricStateDto: CreateHistoricStateDto) {
    return this.historicStateService.create(createHistoricStateDto);
  }

  @Get()
  findAll() {
    return this.historicStateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historicStateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoricStateDto: UpdateHistoricStateDto) {
    return this.historicStateService.update(+id, updateHistoricStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historicStateService.remove(+id);
  }
}
