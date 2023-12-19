import { Entity, PrimaryGeneratedColumn,DeleteDateColumn,CreateDateColumn,UpdateDateColumn, Column } from "typeorm"
import { Usuario } from "./Usuario"


@Entity()
export class Endereco {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    residencia: string

    @Column()
    bairo: string

    @Column()
    cep: string

    @DeleteDateColumn()
    deletedAt?: Date;
    
    @Column()
    num_casa: number

    @Column()
    localidade: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
