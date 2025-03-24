import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NameCourseService } from './name-course.service';
import { CreateNameCourseDto } from './dto/create-name-course.dto';
import { UpdateNameCourseDto } from './dto/update-name-course.dto';

@Controller('name-course')
export class NameCourseController {
  constructor(private readonly nameCourseService: NameCourseService) {}

  @Post()
  create(@Body() createNameCourseDto: CreateNameCourseDto) {
    return this.nameCourseService.create(createNameCourseDto);
  }

  @Get()
  findAll() {
    return this.nameCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nameCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNameCourseDto: UpdateNameCourseDto) {
    return this.nameCourseService.update(+id, updateNameCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nameCourseService.remove(+id);
  }
}
