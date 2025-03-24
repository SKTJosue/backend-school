import { Module } from '@nestjs/common';
import { TypeTutorService } from './type-tutor.service';
import { TypeTutorController } from './type-tutor.controller';

@Module({
  controllers: [TypeTutorController],
  providers: [TypeTutorService],
})
export class TypeTutorModule {}
