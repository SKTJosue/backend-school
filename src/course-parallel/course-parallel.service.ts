import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourseParallelDto } from './dto/create-course-parallel.dto';
import { UpdateCourseParallelDto } from './dto/update-course-parallel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseParallel } from './entities/course-parallel.entity';

@Injectable()
export class CourseParallelService {
  @InjectRepository(CourseParallel)
  private readonly courseParallelRepository: Repository<CourseParallel>;
  async create(createCourseParallelDto: CreateCourseParallelDto) {
    try{
      const courseParallel = this.courseParallelRepository.create(createCourseParallelDto);
      const response = await this.courseParallelRepository.save(courseParallel);
      return response ;
    }catch(error){
      throw new BadRequestException(error);
    }
  }

  findAll() {
    return `This action returns all courseParallel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseParallel`;
  }

  update(id: number, updateCourseParallelDto: UpdateCourseParallelDto) {
    return `This action updates a #${id} courseParallel`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseParallel`;
  }
}
