import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { prisma } from '../../../lib/prisma';
import { Provider } from './entities/provider.entity';

@Injectable()
export class ProvidersService {
  async create(createProviderDto: CreateProviderDto): Promise<Provider> {
      const provider = await prisma.proveedor.create({
        data: createProviderDto,
      });

    return new Provider(provider);
  }

  async findAll() {
    const providers = await prisma.proveedor.findMany({
          include: { estado: true }
        });

    return providers.map(p => new Provider(p));
  }

  findOne(id: number) {
    return `This action returns a #${id} provider`;
  }

  update(id: number, updateProviderDto: UpdateProviderDto) {
    return `This action updates a #${id} provider`;
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }
}
