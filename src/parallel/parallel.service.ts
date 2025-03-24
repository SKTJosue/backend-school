import { Injectable } from '@nestjs/common';
import { CreateParallelDto } from './dto/create-parallel.dto';
import { UpdateParallelDto } from './dto/update-parallel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Parallel } from './entities/parallel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParallelService {
  @InjectRepository(Parallel)
  private readonly parallelRepository:Repository<Parallel>;

  async create(createParallelDto: CreateParallelDto): Promise<Parallel> {
    const newParallel = this.parallelRepository.create(createParallelDto);
    return await this.parallelRepository.save(newParallel);
  }

  findAll() {
    return `This action returns all parallel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parallel`;
  }

  update(id: number, updateParallelDto: UpdateParallelDto) {
    return `This action updates a #${id} parallel`;
  }

  remove(id: number) {
    return `This action removes a #${id} parallel`;
  }
}
