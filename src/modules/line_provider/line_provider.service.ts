import { Injectable } from '@nestjs/common';
import { CreateLineProviderDto } from './dto/create-line_provider.dto';
import { UpdateLineProviderDto } from './dto/update-line_provider.dto';

@Injectable()
export class LineProviderService {
  create(createLineProviderDto: CreateLineProviderDto) {
    return 'This action adds a new lineProvider';
  }

  findAll() {
    return `This action returns all lineProvider`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lineProvider`;
  }

  update(id: number, updateLineProviderDto: UpdateLineProviderDto) {
    return `This action updates a #${id} lineProvider`;
  }

  remove(id: number) {
    return `This action removes a #${id} lineProvider`;
  }
}
