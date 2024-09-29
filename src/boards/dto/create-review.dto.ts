import { CarModel } from "../carModel.entity";
import { Feature } from "../feature.entity";

export class CreateReviewDto {

    comment: string;
    type : string;
    source : string;
    featureId: number;
    carModelId: number;
}
