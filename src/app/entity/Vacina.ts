import { Entity,ManyToOne, OneToOne,PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, Generated } from "typeorm"
import { Carteira } from "./Carteira"


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
// export enum FINALIDADE {
//     ADENO = "Adenovirus",
//     CINO = "Cinomose",
//     BORDA = "Bordetella",
//     GARD = "Gardia",
//     LEPTO = "Leptospirose",
//     LYME = "Lyme",    
//     PARVO = "ParvoVirose",
//     PARAINF = "Parainfluenza",
//     RAIVA = "Raiva",
//     H3N8 = "H3N8 - Influenza",
//     SORO = "Soro Hiperimune"
// }

@Entity()
export class Vacina {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    validade: Date

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
        aplicador: number

        
    @Column({default:false})
        deleted: boolean

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Carteira, (carteira) => carteira.vacinas)
    carteira: Carteira
}
