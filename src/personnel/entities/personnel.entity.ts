import { TypePersonnel } from "src/type-personnel/entities/type-personnel.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Personnel {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    lastname: string;
    @Column()
    ci: string;
    @Column()
    address: string;
    @Column()
    phone: string;
    @ManyToOne(() => TypePersonnel)
    @JoinColumn({ name: 'idTypePersonnel', referencedColumnName: 'id' })
    typePersonnel: TypePersonnel;
    @Column()
    idTypePersonnel: number;
}
