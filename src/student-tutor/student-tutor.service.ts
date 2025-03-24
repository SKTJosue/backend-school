import { Injectable } from '@nestjs/common';
import { CreateStudentTutorDto } from './dto/create-student-tutor.dto';
import { UpdateStudentTutorDto } from './dto/update-student-tutor.dto';

@Injectable()
export class StudentTutorService {
  create(createStudentTutorDto: CreateStudentTutorDto) {
    return 'This action adds a new studentTutor';
  }

  findAll() {
    return `This action returns all studentTutor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentTutor`;
  }

  update(id: number, updateStudentTutorDto: UpdateStudentTutorDto) {
    return `This action updates a #${id} studentTutor`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentTutor`;
  }
}
