import { Controller, Get, Injectable, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('School')
@Controller('school')
@Injectable()
export class StudentService {
    @Post()
    create(createStudentDto: CreateStudentDto) {
        return 'This action adds a new student';
    }
    @Get()
    findAll() {
        return `This action returns all student`;
    }

    findOne(id: number) {
        return `This action returns a #${id} student`;
    }

    update(id: number, updateStudentDto: UpdateStudentDto) {
        return `This action updates a #${id} student`;
    }

    remove(id: number) {
        return `This action removes a #${id} student`;
    }
}
