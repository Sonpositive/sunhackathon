import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModel } from './carModel.entity';  // CarModel Entity
import { Feature } from './feature.entity';  // Feature Entity
import { Review } from './review.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([CarModel, Feature, Review])
  ],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
