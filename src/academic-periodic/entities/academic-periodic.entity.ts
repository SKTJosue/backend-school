import { Management } from "src/management/entities/management.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AcademicPeriodic {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @OneToMany(() => Management, (management) => management.academicPeriodic)
    managements: Management[];
}
