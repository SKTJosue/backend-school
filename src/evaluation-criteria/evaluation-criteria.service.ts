import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEvaluationCriterionDto } from './dto/create-evaluation-criterion.dto';
import { UpdateEvaluationCriterionDto } from './dto/update-evaluation-criterion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EvaluationCriterion } from './entities/evaluation-criterion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EvaluationCriteriaService {
  constructor(
    @InjectRepository(EvaluationCriterion)
    private readonly evaluationCriteriaRepository: Repository<EvaluationCriterion>,
  ) {}

  async create(createEvaluationCriterionDto: CreateEvaluationCriterionDto) {
    try {
      const criteria = this.evaluationCriteriaRepository.create(createEvaluationCriterionDto);
      return await this.evaluationCriteriaRepository.save(criteria);
    } catch (error) {
      throw new BadRequestException('Error creating evaluation criteria: ' + error.message);
    }
  }

  async findAll() {
    try {
      return await this.evaluationCriteriaRepository.find({
        relations: {
          managementCriteria: true
        }
      });
    } catch (error) {
      throw new BadRequestException('Error fetching evaluation criteria: ' + error.message);
    }
  }

  async findOne(id: number) {
    try {
      const criteria = await this.evaluationCriteriaRepository.findOne({
        where: { id },
        relations: {
          managementCriteria: true
        }
      });

      if (!criteria) {
        throw new NotFoundException(`Evaluation criteria with ID ${id} not found`);
      }

      return criteria;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new BadRequestException('Error fetching evaluation criteria: ' + error.message);
    }
  }

  async update(id: number, updateEvaluationCriterionDto: UpdateEvaluationCriterionDto) {
    try {
      const criteria = await this.findOne(id);
      const updated = Object.assign(criteria, updateEvaluationCriterionDto);
      return await this.evaluationCriteriaRepository.save(updated);
    } catch (error) {
      throw new BadRequestException('Error updating evaluation criteria: ' + error.message);
    }
  }

  async remove(id: number) {
    try {
      const criteria = await this.findOne(id);
      return await this.evaluationCriteriaRepository.remove(criteria);
    } catch (error) {
      throw new BadRequestException('Error removing evaluation criteria: ' + error.message);
    }
  }
}
