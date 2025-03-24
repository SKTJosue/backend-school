import { forwardRef, Module } from '@nestjs/common';
import { TypePersonnelService } from './type-personnel.service';
import { TypePersonnelController } from './type-personnel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypePersonnel } from './entities/type-personnel.entity';
import { PersonnelModule } from 'src/personnel/personnel.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([TypePersonnel]),
        forwardRef(() => PersonnelModule),
    ],
    controllers: [TypePersonnelController],
    providers: [TypePersonnelService],
})
export class TypePersonnelModule {}
