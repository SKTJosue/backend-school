import { Controller, Injectable } from '@nestjs/common';
import { CreateNameCourseDto } from './dto/create-name-course.dto';
import { UpdateNameCourseDto } from './dto/update-name-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NameCourse } from './entities/name-course.entity';
import { Repository } from 'typeorm';
@Controller('name-course')
@Injectable()
export class NameCourseService {
  @InjectRepository(NameCourse)
  private readonly nameCourseRepository: Repository<NameCourse> ;
  async create(createNameCourseDto: CreateNameCourseDto) {
    try{
      const newData = this.nameCourseRepository.create(createNameCourseDto);
      return await this.nameCourseRepository.save(newData);
    }catch(error){
      throw new Error(error);
    }
  }

  findAll() {
    return `This action returns all nameCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nameCourse`;
  }

  update(id: number, updateNameCourseDto: UpdateNameCourseDto) {
    return `This action updates a #${id} nameCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} nameCourse`;
  }
}
