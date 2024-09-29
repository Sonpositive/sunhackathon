import { EntityRepository, Repository } from 'typeorm';
import { CarModel } from './carModel.entity';

@EntityRepository(CarModel)
export class CarModelRepository extends Repository<CarModel> {}
