import { forwardRef, Module } from '@nestjs/common';
import { PersonnelService } from './personnel.service';
import { PersonnelController } from './personnel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personnel } from './entities/personnel.entity';
import { TypePersonnelModule } from 'src/type-personnel/type-personnel.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Personnel]),
        forwardRef(() => TypePersonnelModule),
    ],
    controllers: [PersonnelController],
    providers: [PersonnelService],
})
export class PersonnelModule {}
