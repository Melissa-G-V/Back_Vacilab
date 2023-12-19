import { Entity,ObjectIdColumn, ObjectId,OneToOne,JoinColumn, DeleteDateColumn,PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, Generated } from "typeorm"


@Entity()
export class Peso {

    @ObjectIdColumn()
    id: ObjectId

    @Column()
    peso: number
    @Column()
    medida: string

    @DeleteDateColumn()
    deletedAt?: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;


}