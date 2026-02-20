import { PartialType } from '@nestjs/mapped-types';
import { CreateLineProviderDto } from './create-line_provider.dto';

export class UpdateLineProviderDto extends PartialType(CreateLineProviderDto) {}
