import { Entity,OneToOne,OneToMany, JoinColumn,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, Column } from "typeorm"
import { Endereco } from "./Endereco"
import { Animal } from "./Animal"

export enum Roles {
    ADMIN = "admin",
    USER = "user",
    VALIDATOR = "validator"
}

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column({unique:true})
    email: string

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

    @Column({
    type: "enum",
    enum: Roles,
    default: Roles.USER,
        })
    definicao: Roles

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Endereco)
    @JoinColumn()
    endereco: Endereco

    @OneToMany(() => Animal, (animal) => animal.usuario)
    animais: Animal[]
}
