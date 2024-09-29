import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class CarModel {
  @PrimaryGeneratedColumn()
  id: number; // This is equivalent to `id SERIAL PRIMARY KEY`

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string; // This is equivalent to `name VARCHAR(100) NOT NULL`

  @Column({ type: 'varchar', length: 50 })
  type: string; // This is equivalent to `type VARCHAR(50)`

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number; // This is equivalent to `price NUMERIC(10, 2)`

  @Column({ type: 'int' })
  releasedYear: number; // This is equivalent to `release_year INTEGER`

  @Column({ type: 'varchar', length: 100 })
  company: string; // This is equivalent to `company VARCHAR(100)`
}



