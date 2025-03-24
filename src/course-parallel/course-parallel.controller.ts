import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseParallelService } from './course-parallel.service';
import { CreateCourseParallelDto } from './dto/create-course-parallel.dto';
import { UpdateCourseParallelDto } from './dto/update-course-parallel.dto';

@Controller('course-parallel')
export class CourseParallelController {
  constructor(private readonly courseParallelService: CourseParallelService) {}

  @Post()
  create(@Body() createCourseParallelDto: CreateCourseParallelDto) {
    return this.courseParallelService.create(createCourseParallelDto);
  }

  @Get()
  findAll() {
    return this.courseParallelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseParallelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseParallelDto: UpdateCourseParallelDto) {
    return this.courseParallelService.update(+id, updateCourseParallelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseParallelService.remove(+id);
  }
}
