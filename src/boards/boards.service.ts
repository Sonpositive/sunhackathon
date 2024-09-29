import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarModelRepository } from './CarModel.repository';
import { FeatureRepository } from './Feature.repository';
import { ReviewRepository } from './Review.repository';
import { CarModel } from './carModel.entity';
import { NotFoundError } from 'rxjs';
import { Review } from './review.entity';
import { Feature } from './feature.entity';
import { Repository } from 'typeorm/repository/Repository';
import { CreateReviewDto } from './dto/create-Review.dto';

@Injectable()
export class BoardsService {

    constructor(
        @InjectRepository(CarModel) private carModelRepo: Repository<CarModel>,  // Repository for CarModel
        @InjectRepository(Feature) private featureRepo: Repository<Feature>,      // Repository for Feature
        @InjectRepository(Review) private reviewRepo: Repository<Review>, 
      ) {}

    async getCarModelByID(id : number): Promise<CarModel>{

        const found = await this.carModelRepo.findOne({ where: { id } });

        if(!found){
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }

        return found;

    }
    
    async createCarModel(carModelData: Partial<CarModel>): Promise<CarModel> {
        const carModel = this.carModelRepo.create(carModelData);
        return this.carModelRepo.save(carModel);
    }

    async createFeature(featureData: Partial<Feature>): Promise<Feature> {
        const feature = this.featureRepo.create(featureData);
        return this.featureRepo.save(feature);
    }

    async createReview(createReviewDto: CreateReviewDto): Promise<Review> {
        const { comment, source, type, carModelId, featureId } = createReviewDto;
      
        // Find the associated CarModel
        const car = await this.carModelRepo.findOneBy({ id: carModelId});
        if (!car) {
          throw new NotFoundException('Car model not found');
        }
      
        // Find the associated Feature
        const feature = await this.featureRepo.findOneBy({ feature_id: featureId });
        if (!feature) {
          throw new NotFoundException('Feature not found');
        }
      
        // Create the Review entity
        const review = this.reviewRepo.create({
          
          car, // Set the car model relation
          feature,
          comment,
          source,
          type,  // Set the feature relation
        });
      
        // Save the Review
        return this.reviewRepo.save(review);
      }
}
