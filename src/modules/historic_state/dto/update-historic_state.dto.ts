import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoricStateDto } from './create-historic_state.dto';

export class UpdateHistoricStateDto extends PartialType(CreateHistoricStateDto) {}
