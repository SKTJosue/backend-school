import { create } from "domain";
import { join } from "path";
import { CourseParallel } from "src/course-parallel/entities/course-parallel.entity";
import { Grade } from "src/grade/entities/grade.entity";
import { NameCourse } from "src/name-course/entities/name-course.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => NameCourse)
    @JoinColumn({ name: 'idNameCourse', referencedColumnName: 'id' })
    nameCourse: NameCourse;
    @Column()
    idNameCourse: number;
    @Column({type:'boolean',default:true})
    statate: boolean;
    @ManyToOne(() => Grade)
    @JoinColumn({ name: 'idGrade', referencedColumnName: 'id' })
    grade: Grade;
    @Column()
    idGrade: number;
    @CreateDateColumn()
    createdDate: Date;
    @DeleteDateColumn()
    deletedDate: Date | null = null;
    @OneToMany(() => CourseParallel, (courseParallel) => courseParallel.course)
    courseParallels: CourseParallel[];
}
