import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitiesProviderService } from './activities_provider.service';
import { CreateActivitiesProviderDto } from './dto/create-activities_provider.dto';
import { UpdateActivitiesProviderDto } from './dto/update-activities_provider.dto';

@Controller('activities-provider')
export class ActivitiesProviderController {
  constructor(private readonly activitiesProviderService: ActivitiesProviderService) {}

  @Post()
  create(@Body() createActivitiesProviderDto: CreateActivitiesProviderDto) {
    return this.activitiesProviderService.create(createActivitiesProviderDto);
  }

  @Get()
  findAll() {
    return this.activitiesProviderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitiesProviderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivitiesProviderDto: UpdateActivitiesProviderDto) {
    return this.activitiesProviderService.update(+id, updateActivitiesProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitiesProviderService.remove(+id);
  }
}
