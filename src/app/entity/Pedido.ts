import { Entity,OneToOne,JoinColumn, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, Generated } from "typeorm"
import { Usuario } from "./Usuario"


@Entity()
export class Pedido {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    atendido: boolean

    @Column()
    aprovado: boolean

    @OneToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;


}