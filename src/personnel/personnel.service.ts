import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { Personnel } from './entities/personnel.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonnelService {
  constructor(
    @InjectRepository(Personnel)
    private readonly personnelRepository: Repository<Personnel>,
  ) {}

  async create(createPersonnelDto: CreatePersonnelDto) {
    try {
      const personnel = this.personnelRepository.create(createPersonnelDto);
      return await this.personnelRepository.save(personnel);
    } catch (error) {
      throw new BadRequestException('Error creating personnel: ' + error.message);
    }
  }

  async findAll() {
    try {
      return await this.personnelRepository.find({
        relations: {
          typePersonnel: true
        }
      });
    } catch (error) {
      throw new BadRequestException('Error fetching personnel list: ' + error.message);
    }
  }

  async findOne(id: number) {
    try {
      const personnel = await this.personnelRepository.findOne({
        where: { id },
        relations: {
          typePersonnel: true
        }
      });
      
      if (!personnel) {
        throw new NotFoundException(`Personnel with ID ${id} not found`);
      }
      
      return personnel;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new BadRequestException('Error fetching personnel: ' + error.message);
    }
  }

  async update(id: number, updatePersonnelDto: UpdatePersonnelDto) {
    try {
      const personnel = await this.findOne(id);
      const updated = Object.assign(personnel, updatePersonnelDto);
      return await this.personnelRepository.save(updated);
    } catch (error) {
      throw new BadRequestException('Error updating personnel: ' + error.message);
    }
  }

  async remove(id: number) {
    try {
      const personnel = await this.findOne(id);
      return await this.personnelRepository.remove(personnel);
    } catch (error) {
      throw new BadRequestException('Error removing personnel: ' + error.message);
    }
  }
}
