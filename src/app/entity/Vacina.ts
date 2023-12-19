import { Entity,OneToMany,ManyToOne, OneToOne,DeleteDateColumn,PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, Generated } from "typeorm"
import { Carteira_Animal_Vacinas } from "./Carteira"


export enum CLASSIFICACAO {
    MONO = "MonoValente",
    POLY = "PoliValente",
}

export enum DOSE {
    P = '1º Dose',
    S = '2º Dose',
    T= '3º Dose',
    R = 'Reforço',
}
@Entity()
export class Vacina {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    aplicado: Date

    @Column()
    expiracao: Date

    @Column()
    fabricacao: Date

    @Column()
    fabricante: string

    @Column({
        type: "enum",
        enum: CLASSIFICACAO,
        default: CLASSIFICACAO.MONO,
            })
        classificacao: CLASSIFICACAO

    @Column({
        type: "enum",
        enum: DOSE,
        default: DOSE.P,
            })
        dose: DOSE
        
    @Column()
        finalidade: string

    @Column()
        aplicador: string


    @OneToMany(() => Carteira_Animal_Vacinas, carteira_Animal_Vacinas => carteira_Animal_Vacinas.vacina)
        public carteira_Animal_Vacinas: Carteira_Animal_Vacinas[];


    @DeleteDateColumn()
        deletedAt?: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
