import { Entity,OneToOne,ManyToOne,JoinColumn, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, Generated } from "typeorm"
import { Carteira } from "./Carteira"
import { Usuario } from "./Usuario"


export enum Especie {
    CAES = "Cachorro",
    GATOS = "Gato",
    AVES = "Passaro",
    ROEDORES = "Rato/Hamster"
}

@Entity()
export class Animal {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    cor: string

    @Column()
    raca: string

    @Column()
    peso: number

    @Column()
    data_nascimento: Date

    @Column()
    compartilhado: boolean

    @Column()
    microchip: boolean

    @Column({default:false})
    mortis: boolean

    @Column({default:false})
    deleted: boolean


    @Column({unique:true})
    @Generated("uuid")
    codigo: string; 

    @Column({
        type: "enum",
        enum: Especie,
        default: Especie.CAES,
            })
        especie: Especie

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Carteira)
    @JoinColumn()
    carteira: Carteira


    @ManyToOne(() => Usuario, (usuario) => usuario.animais)
    usuario: Usuario
}
