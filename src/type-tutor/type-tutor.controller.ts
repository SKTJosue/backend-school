import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeTutorService } from './type-tutor.service';
import { CreateTypeTutorDto } from './dto/create-type-tutor.dto';
import { UpdateTypeTutorDto } from './dto/update-type-tutor.dto';

@Controller('type-tutor')
export class TypeTutorController {
  constructor(private readonly typeTutorService: TypeTutorService) {}

  @Post()
  create(@Body() createTypeTutorDto: CreateTypeTutorDto) {
    return this.typeTutorService.create(createTypeTutorDto);
  }

  @Get()
  findAll() {
    return this.typeTutorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeTutorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeTutorDto: UpdateTypeTutorDto) {
    return this.typeTutorService.update(+id, updateTypeTutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeTutorService.remove(+id);
  }
}
