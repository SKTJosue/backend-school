import { BadRequestException, Controller, Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { Repository } from 'typeorm';
@ApiTags('School')
@Controller('school')
@Injectable()
export class SchoolService {
    @InjectRepository(School)
    private readonly schoolRepository: Repository<School>;
    create(createSchoolDto: CreateSchoolDto) {
        try{
            const data = this.schoolRepository.create(
                {...createSchoolDto,createdDate:new Date()},
            );
            return this.schoolRepository.save(data);
        }catch(error){
            throw new BadRequestException(error);
        }
    }

    async findAll() {
        return await this.schoolRepository.find();
    }

    async findOne(id: number) {
        return await this.schoolRepository.findOne({
            where: {
                id: id,
            },
        });
    }

    update(id: number, updateSchoolDto: UpdateSchoolDto) {
        return `This action updates a #${id} school`;
    }

    remove(id: number) {
        return `This action removes a #${id} school`;
    }
}
