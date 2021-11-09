import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    name: string;

    @Column()
    birthDate: Date;

    @Column()
    semester: number;

    @Column()
    degree: number;
}