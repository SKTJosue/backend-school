import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class TypePersonnel {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;	
}
