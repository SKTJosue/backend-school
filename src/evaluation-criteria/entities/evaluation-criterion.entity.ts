import { ManagementEvaluationCriterion } from "src/management-evaluation-criteria/entities/management-evaluation-criterion.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class EvaluationCriterion {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    quantityMax: number;
    @Column()
    passingGrade: number;
    @OneToMany(
        () => ManagementEvaluationCriterion,
        (managementCriteria) => managementCriteria.evaluationCriteria,
    )
    managementCriteria: ManagementEvaluationCriterion[];
}
