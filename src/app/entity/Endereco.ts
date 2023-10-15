import { Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, Column } from "typeorm"
import { Usuario } from "./Usuario"


@Entity()
export class Endereco {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    logradouro: string

    @Column()
    bairo: string

    @Column()
    cep: string

    @Column()
    localidade: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
