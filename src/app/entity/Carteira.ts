import { Entity,OneToMany, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,Generated,Unique, Column } from "typeorm"
import { Vacina } from "./Vacina";

@Entity()
export class Carteira {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique:true}) 
    @Generated("uuid")
    codigo: string;

    @Column()
    bg_img: string

    @Column({default:false})
    deleted: boolean

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Vacina, (vacina) => vacina.carteira)
    vacinas: Vacina[]
    
}
