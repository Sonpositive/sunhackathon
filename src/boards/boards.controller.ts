import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CarModel } from './carModel.entity';
import { Feature } from './feature.entity';
import { CreateCarModelDto } from './dto/create-CarModel.dto';
import { CreateFeatureDto } from './dto/create-Feature.dto';
import { CreateReviewDto } from './dto/create-Review.dto';
import { Review } from './review.entity';

@Controller('boards')
export class BoardsController {

    constructor(private boardService: BoardsService){}


    @Get('/:id')
    getCarModelById(@Param('id') id:number): Promise<CarModel>{
        return this.boardService.getCarModelByID(id);
    }
    
    @Post('/car-model')
    createCarModel(
       @Body() CreateCarModelDto: CreateCarModelDto   
    ): Promise<CarModel>{
        return this.boardService.createCarModel(CreateCarModelDto);
    }

    @Post('/feature')
    createFeature(
       @Body() CreateFeatureDto: CreateFeatureDto   
    ): Promise<Feature>{
        return this.boardService.createFeature(CreateFeatureDto);
    }
    @Post('/review')
        createReview(
        @Body() createReviewDto: CreateReviewDto,
        ): Promise<Review> {
        return this.boardService.createReview(createReviewDto);
    }

}


