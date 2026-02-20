import { PartialType } from '@nestjs/mapped-types';
import { CreateEconomicActivityDto } from './create-economic_activity.dto';

export class UpdateEconomicActivityDto extends PartialType(CreateEconomicActivityDto) {}
