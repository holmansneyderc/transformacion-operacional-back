import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinessLineService } from './business_line.service';
import { CreateBusinessLineDto } from './dto/create-business_line.dto';
import { UpdateBusinessLineDto } from './dto/update-business_line.dto';

@Controller('business-line')
export class BusinessLineController {
  constructor(private readonly businessLineService: BusinessLineService) {}

  @Post()
  create(@Body() createBusinessLineDto: CreateBusinessLineDto) {
    return this.businessLineService.create(createBusinessLineDto);
  }

  @Get()
  findAll() {
    return this.businessLineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessLineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessLineDto: UpdateBusinessLineDto) {
    return this.businessLineService.update(+id, updateBusinessLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessLineService.remove(+id);
  }
}
