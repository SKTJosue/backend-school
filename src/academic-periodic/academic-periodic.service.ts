import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAcademicPeriodicDto } from './dto/create-academic-periodic.dto';
import { UpdateAcademicPeriodicDto } from './dto/update-academic-periodic.dto';
import { AcademicPeriodic } from './entities/academic-periodic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AcademicPeriodicService {
  constructor(
    @InjectRepository(AcademicPeriodic)
    private readonly academicPeriodicRepository: Repository<AcademicPeriodic>,
  ) {}

  async create(createAcademicPeriodicDto: CreateAcademicPeriodicDto) {
    try {
            const academicPeriodic = this.academicPeriodicRepository.create(
                createAcademicPeriodicDto,
            );
      return await this.academicPeriodicRepository.save(academicPeriodic);
    } catch (error) {
      throw new BadRequestException('Error creating academic periodic: ' + error.message);
    }
  }

  async findAll() {
    try {
      return await this.academicPeriodicRepository.find({
        relations: {
          managements: true
        }
      });
    } catch (error) {
      throw new BadRequestException('Error fetching academic periodic list: ' + error.message);
    }
  }

  async findOne(id: number) {
    try {
      const academicPeriodic = await this.academicPeriodicRepository.findOne({
        where: { id },
        relations: {
          managements: true
        }
      });
      
      if (!academicPeriodic) {
        throw new NotFoundException(`Academic Periodic with ID ${id} not found`);
      }
      
      return academicPeriodic;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new BadRequestException('Error fetching academic periodic: ' + error.message);
    }
  }

  async update(id: number, updateAcademicPeriodicDto: UpdateAcademicPeriodicDto) {
    try {
      const academicPeriodic = await this.findOne(id);
      const updated = Object.assign(academicPeriodic, updateAcademicPeriodicDto);
      return await this.academicPeriodicRepository.save(updated);
    } catch (error) {
      throw new BadRequestException('Error updating academic periodic: ' + error.message);
    }
  }

  async remove(id: number) {
    try {
      const academicPeriodic = await this.findOne(id);
      return await this.academicPeriodicRepository.remove(academicPeriodic);
    } catch (error) {
      throw new BadRequestException('Error removing academic periodic: ' + error.message);
    }
  }
}
