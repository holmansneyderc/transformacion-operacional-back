import { Injectable } from '@nestjs/common';
import { CreateActivitiesProviderDto } from './dto/create-activities_provider.dto';
import { UpdateActivitiesProviderDto } from './dto/update-activities_provider.dto';

@Injectable()
export class ActivitiesProviderService {
  create(createActivitiesProviderDto: CreateActivitiesProviderDto) {
    return 'This action adds a new activitiesProvider';
  }

  findAll() {
    return `This action returns all activitiesProvider`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activitiesProvider`;
  }

  update(id: number, updateActivitiesProviderDto: UpdateActivitiesProviderDto) {
    return `This action updates a #${id} activitiesProvider`;
  }

  remove(id: number) {
    return `This action removes a #${id} activitiesProvider`;
  }
}
