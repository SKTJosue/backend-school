import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademicPeriodicService } from './academic-periodic.service';
import { CreateAcademicPeriodicDto } from './dto/create-academic-periodic.dto';
import { UpdateAcademicPeriodicDto } from './dto/update-academic-periodic.dto';

@Controller('academic-periodic')
export class AcademicPeriodicController {
  constructor(private readonly academicPeriodicService: AcademicPeriodicService) {}

  @Post()
  create(@Body() createAcademicPeriodicDto: CreateAcademicPeriodicDto) {
    return this.academicPeriodicService.create(createAcademicPeriodicDto);
  }

  @Get()
  findAll() {
    return this.academicPeriodicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicPeriodicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademicPeriodicDto: UpdateAcademicPeriodicDto) {
    return this.academicPeriodicService.update(+id, updateAcademicPeriodicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicPeriodicService.remove(+id);
  }
}
