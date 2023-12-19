import { Entity,OneToOne, OneToMany,DeleteDateColumn,ManyToOne,JoinColumn, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, Generated } from "typeorm"
import { Carteira_Animal_Vacinas } from "./Carteira"
import { Usuario } from "./Usuario"


export enum Especie {
    CAES = "Cachorro",
    GATOS = "Gato",
    AVES = "Passaro",
    COELHO = "Coelho",
    ROEDORES = "Roedor"
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
    genero: string

    // @Column()
    // imagem: string

    @Column()
    raca: string

    // @Column()
    // peso: number

    @Column()
    data_nascimento: Date

    @Column()
    compartilhado: boolean
    @Column()
    castrado: boolean

    @Column()
    microchip: boolean

    @Column({default:false})
    mortis: boolean

    @DeleteDateColumn()
    deletedAt?: Date;


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

    @OneToMany(() => Carteira_Animal_Vacinas, carteira_Animal_Vacinas => carteira_Animal_Vacinas.animal)
    public carteira_Animal_Vacinas: Carteira_Animal_Vacinas[];

    @ManyToOne(() => Usuario, (usuario) => usuario.animais)
    usuario: Usuario
}
