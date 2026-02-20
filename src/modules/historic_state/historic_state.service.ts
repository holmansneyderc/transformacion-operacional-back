import { Injectable } from '@nestjs/common';
import { CreateHistoricStateDto } from './dto/create-historic_state.dto';
import { UpdateHistoricStateDto } from './dto/update-historic_state.dto';

@Injectable()
export class HistoricStateService {
  create(createHistoricStateDto: CreateHistoricStateDto) {
    return 'This action adds a new historicState';
  }

  findAll() {
    return `This action returns all historicState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historicState`;
  }

  update(id: number, updateHistoricStateDto: UpdateHistoricStateDto) {
    return `This action updates a #${id} historicState`;
  }

  remove(id: number) {
    return `This action removes a #${id} historicState`;
  }
}
