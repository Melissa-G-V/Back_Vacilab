import { Entity, OneToOne,JoinColumn,PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn, } from "typeorm"
import { Endereco } from "./Endereco"

// export enum Roles {
//     CLINICA = "clinica",
//     USER = "user",
//     VALIDATOR = "validator"
// }

@Entity()
export class Veterinario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column({unique:true})
    email: string

    @Column({unique:true})
    crmv: string

    @Column({unique:true})
    cnpj: string

    @Column()
    telefone: string

    @Column({unique:true})
    cpf: string

    @Column()
    senha: string
    
    @Column()
    nova_senha: string

    @Column({default:false})
    deleted: boolean

    @OneToOne(() => Endereco)
    @JoinColumn()
    endereco: Endereco
    

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
