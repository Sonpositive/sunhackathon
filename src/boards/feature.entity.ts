import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity()
export class Feature {
  @PrimaryGeneratedColumn()
  feature_id: number; // Corresponds to SERIAL and PRIMARY KEY

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string; // Corresponds to VARCHAR(255), NOT NULL, UNIQUE
}