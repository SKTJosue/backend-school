import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity()
export class School {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    address: string;
    @Column()
    email: string;
    @Column()
    phone: string;
    @Column({ type: 'boolean' })
    state: boolean;
}
