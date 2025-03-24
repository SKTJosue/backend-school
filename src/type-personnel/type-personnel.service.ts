import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTypePersonnelDto } from './dto/create-type-personnel.dto';
import { UpdateTypePersonnelDto } from './dto/update-type-personnel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TypePersonnel } from './entities/type-personnel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TypePersonnelService {
    constructor(
        @InjectRepository(TypePersonnel)
        private readonly typePersonnelRepository: Repository<TypePersonnel>,
    ) {}

    async create(createTypePersonnelDto: CreateTypePersonnelDto) {
        try {
            const typePersonnel = this.typePersonnelRepository.create(
                createTypePersonnelDto,
            );
            return await this.typePersonnelRepository.save(typePersonnel);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

async findAll() {
  return await this.typePersonnelRepository.find();
}

async findOne(id: number) {
  const typePersonnel = await this.typePersonnelRepository.findOne({ 
    where: { id } 
  });
  if (!typePersonnel) {
    throw new BadRequestException('Type Personnel not found');
  }
  return typePersonnel;
}

async update(id: number, updateTypePersonnelDto: UpdateTypePersonnelDto) {
  const typePersonnel = await this.findOne(id);
  const updated = Object.assign(typePersonnel, updateTypePersonnelDto);
  return await this.typePersonnelRepository.save(updated);
}

async remove(id: number) {
  const typePersonnel = await this.findOne(id);
  return await this.typePersonnelRepository.remove(typePersonnel);
}
}
