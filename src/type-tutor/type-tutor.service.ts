import { Injectable } from '@nestjs/common';
import { CreateTypeTutorDto } from './dto/create-type-tutor.dto';
import { UpdateTypeTutorDto } from './dto/update-type-tutor.dto';

@Injectable()
export class TypeTutorService {
  create(createTypeTutorDto: CreateTypeTutorDto) {
    return 'This action adds a new typeTutor';
  }

  findAll() {
    return `This action returns all typeTutor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeTutor`;
  }

  update(id: number, updateTypeTutorDto: UpdateTypeTutorDto) {
    return `This action updates a #${id} typeTutor`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeTutor`;
  }
}
