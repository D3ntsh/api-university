import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Subjects {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    name : string;

    @Column()
    credits: number;
}