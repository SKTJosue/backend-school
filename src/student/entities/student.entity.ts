import { Course } from 'src/course/entities/course.entity';
import { TypePersonnel } from 'src/type-personnel/entities/type-personnel.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    rude: string;
    @Column()
    dateNacimiento: Date;
    @ManyToOne(() => TypePersonnel)
    @JoinColumn({ name: 'idTypePersonnel', referencedColumnName: 'id' })
    typePersonnel: TypePersonnel;
    @Column()
    idTypePersonnel: TypePersonnel;
    @ManyToOne(() => Course)
    @JoinColumn({ name: 'idCourse', referencedColumnName: 'id' })
    curso: Course;
    @Column()
    idCourse: Course;
}
