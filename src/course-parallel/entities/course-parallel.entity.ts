import { Course } from "src/course/entities/course.entity";
import { Parallel } from "src/parallel/entities/parallel.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CourseParallel {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Course)
    @JoinColumn({ name: 'idCourse', referencedColumnName: 'id' })
    course: Course;
    @Column()
    idCourse: number;
    @ManyToOne(() => Parallel)
    @JoinColumn({ name: 'idParallel', referencedColumnName: 'id' })
    parallel: Parallel;
    @Column()
    idParallel: number;
}
