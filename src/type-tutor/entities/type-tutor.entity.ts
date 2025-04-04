import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TypeTutor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
}
