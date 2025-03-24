import { AcademicPeriodic } from "src/academic-periodic/entities/academic-periodic.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Management {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    year: number;
    @ManyToOne(() => AcademicPeriodic)
    @JoinColumn({ name: 'idAcademicPeriodic', referencedColumnName: 'id' })
    academicPeriodic: AcademicPeriodic; // Changed from typePersonnel to academicPeriodic
    @Column()
    idAcademicPeriodic: number;
    @Column({ type: 'boolean', default: true })
    status: boolean;
    @Column()
    rangerQuality: number;
}
