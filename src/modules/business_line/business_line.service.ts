import { Injectable } from '@nestjs/common';
import { CreateBusinessLineDto } from './dto/create-business_line.dto';
import { UpdateBusinessLineDto } from './dto/update-business_line.dto';

@Injectable()
export class BusinessLineService {
  create(createBusinessLineDto: CreateBusinessLineDto) {
    return 'This action adds a new businessLine';
  }

  findAll() {
    return `This action returns all businessLine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessLine`;
  }

  update(id: number, updateBusinessLineDto: UpdateBusinessLineDto) {
    return `This action updates a #${id} businessLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessLine`;
  }
}
