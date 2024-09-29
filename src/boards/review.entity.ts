import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Feature } from './feature.entity';
import { CarModel } from './carModel.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  review_id: number; // Corresponds to SERIAL and PRIMARY KEY

  @ManyToOne(() => Feature, (feature) => feature.feature_id, { onDelete: 'CASCADE' })
  feature: Feature; // Corresponds to the foreign key reference to Feature

  @ManyToOne(() => CarModel, (carModel) => carModel.id)
  car: CarModel; // Corresponds to the foreign key reference to CarModel

  @Column('text')
  comment: string; // Corresponds to TEXT

  @Column({ type: 'varchar', length: 255 })
  source: string; // Corresponds to VARCHAR(255)

  @Column({ type: 'varchar', length: 100 })
  type: string; // Corresponds to VARCHAR(100)
}
