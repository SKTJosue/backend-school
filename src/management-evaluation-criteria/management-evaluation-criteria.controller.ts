import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManagementEvaluationCriteriaService } from './management-evaluation-criteria.service';
import { CreateManagementEvaluationCriterionDto } from './dto/create-management-evaluation-criterion.dto';
import { UpdateManagementEvaluationCriterionDto } from './dto/update-management-evaluation-criterion.dto';

@Controller('management-evaluation-criteria')
export class ManagementEvaluationCriteriaController {
  constructor(private readonly managementEvaluationCriteriaService: ManagementEvaluationCriteriaService) {}

  @Post()
  create(@Body() createManagementEvaluationCriterionDto: CreateManagementEvaluationCriterionDto) {
    return this.managementEvaluationCriteriaService.create(createManagementEvaluationCriterionDto);
  }

  @Get()
  findAll() {
    return this.managementEvaluationCriteriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managementEvaluationCriteriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateManagementEvaluationCriterionDto: UpdateManagementEvaluationCriterionDto) {
    return this.managementEvaluationCriteriaService.update(+id, updateManagementEvaluationCriterionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managementEvaluationCriteriaService.remove(+id);
  }
}
