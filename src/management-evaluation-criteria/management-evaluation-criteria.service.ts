import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateManagementEvaluationCriterionDto } from './dto/create-management-evaluation-criterion.dto';
import { UpdateManagementEvaluationCriterionDto } from './dto/update-management-evaluation-criterion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ManagementEvaluationCriterion } from './entities/management-evaluation-criterion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ManagementEvaluationCriteriaService {
  constructor(
    @InjectRepository(ManagementEvaluationCriterion)
    private readonly managementEvaluationCriteriaRepository: Repository<ManagementEvaluationCriterion>,
  ) {}

    async create(
        createManagementEvaluationCriterionDto: CreateManagementEvaluationCriterionDto,
    ) {
    try {
      const managementCriteria = this.managementEvaluationCriteriaRepository.create(createManagementEvaluationCriterionDto);
      return await this.managementEvaluationCriteriaRepository.save(managementCriteria);
    } catch (error) {
      throw new BadRequestException('Error creating management evaluation criteria: ' + error.message);
    }
  }

  async findAll() {
    try {
      return await this.managementEvaluationCriteriaRepository.find({
        relations: {
          management: true,
          evaluationCriteria: true
        }
      });
    } catch (error) {
      throw new BadRequestException('Error fetching management evaluation criteria: ' + error.message);
    }
  }

  async findOne(id: number) {
    try {
      const managementCriteria = await this.managementEvaluationCriteriaRepository.findOne({
        where: { id },
        relations: {
          management: true,
          evaluationCriteria: true
        }
      });

      if (!managementCriteria) {
        throw new NotFoundException(`Management evaluation criteria with ID ${id} not found`);
      }

      return managementCriteria;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new BadRequestException('Error fetching management evaluation criteria: ' + error.message);
    }
  }

  async update(id: number, updateManagementEvaluationCriterionDto: UpdateManagementEvaluationCriterionDto) {
    try {
      const managementCriteria = await this.findOne(id);
      const updated = Object.assign(managementCriteria, updateManagementEvaluationCriterionDto);
      return await this.managementEvaluationCriteriaRepository.save(updated);
    } catch (error) {
      throw new BadRequestException('Error updating management evaluation criteria: ' + error.message);
    }
  }

  async remove(id: number) {
    try {
      const managementCriteria = await this.findOne(id);
      return await this.managementEvaluationCriteriaRepository.remove(managementCriteria);
    } catch (error) {
      throw new BadRequestException('Error removing management evaluation criteria: ' + error.message);
    }
  }
}
