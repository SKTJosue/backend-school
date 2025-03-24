import { Injectable } from '@nestjs/common';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grade } from './entities/grade.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GradeService {
  @InjectRepository(Grade)
  private readonly gradeRepository: Repository<Grade>;
  async create(createGradeDto: CreateGradeDto) {
    try{
      const grade = this.gradeRepository.create(createGradeDto);
      return this.gradeRepository.save(grade);
    }catch(error){
      throw new Error(error);
    }
  }

  findAll() {
    return `This action returns all grade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grade`;
  }

  update(id: number, updateGradeDto: UpdateGradeDto) {
    return `This action updates a #${id} grade`;
  }

  remove(id: number) {
    return `This action removes a #${id} grade`;
  }
}
