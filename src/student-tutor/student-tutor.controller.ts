import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentTutorService } from './student-tutor.service';
import { CreateStudentTutorDto } from './dto/create-student-tutor.dto';
import { UpdateStudentTutorDto } from './dto/update-student-tutor.dto';

@Controller('student-tutor')
export class StudentTutorController {
  constructor(private readonly studentTutorService: StudentTutorService) {}

  @Post()
  create(@Body() createStudentTutorDto: CreateStudentTutorDto) {
    return this.studentTutorService.create(createStudentTutorDto);
  }

  @Get()
  findAll() {
    return this.studentTutorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentTutorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentTutorDto: UpdateStudentTutorDto) {
    return this.studentTutorService.update(+id, updateStudentTutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentTutorService.remove(+id);
  }
}
