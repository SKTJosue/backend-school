import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypePersonnelService } from './type-personnel.service';
import { CreateTypePersonnelDto } from './dto/create-type-personnel.dto';
import { UpdateTypePersonnelDto } from './dto/update-type-personnel.dto';

@Controller('type-personnel')
export class TypePersonnelController {
  constructor(private readonly typePersonnelService: TypePersonnelService) {}

  @Post()
  create(@Body() createTypePersonnelDto: CreateTypePersonnelDto) {
    return this.typePersonnelService.create(createTypePersonnelDto);
  }

  @Get()
  findAll() {
    return this.typePersonnelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typePersonnelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypePersonnelDto: UpdateTypePersonnelDto) {
    return this.typePersonnelService.update(+id, updateTypePersonnelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typePersonnelService.remove(+id);
  }
}
