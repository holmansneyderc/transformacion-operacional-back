import { PartialType } from '@nestjs/mapped-types';
import { CreateActivitiesProviderDto } from './create-activities_provider.dto';

export class UpdateActivitiesProviderDto extends PartialType(CreateActivitiesProviderDto) {}
