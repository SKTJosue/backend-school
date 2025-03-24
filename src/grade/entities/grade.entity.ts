import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Grade {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    grade: string;
    @CreateDateColumn()
    createdDate: Date;
    @DeleteDateColumn()
    deletedDate: Date | null = null;
}
