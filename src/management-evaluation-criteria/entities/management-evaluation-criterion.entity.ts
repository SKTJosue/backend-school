import { EvaluationCriterion } from "src/evaluation-criteria/entities/evaluation-criterion.entity";
import { Management } from "src/management/entities/management.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class ManagementEvaluationCriterion {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Management)
    @JoinColumn({ name: 'idManagement', referencedColumnName: 'id' })
    management: Management;

    @Column()
    idManagement: number;

    @ManyToOne(() => EvaluationCriterion)
    @JoinColumn({ name: 'idEvaluationCriteria', referencedColumnName: 'id' })
    evaluationCriteria: EvaluationCriterion;

    @Column()
    idEvaluationCriteria: number;

    @Column({ type: 'boolean', default: true })
    status: boolean;
}
