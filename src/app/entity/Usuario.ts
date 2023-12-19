import { Entity,OneToOne,BeforeInsert,OneToMany, DeleteDateColumn,JoinColumn,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, Column } from "typeorm"
import { Endereco } from "./Endereco"
import { Animal } from "./Animal"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
    
    // @Column()
    // nova_senha: string

    @DeleteDateColumn()
    deletedAt?: Date;

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
    
    @BeforeInsert()
    async hashPassword() {
      this.senha = await bcrypt.hash(this.senha, 12);
    }
  
    static async comparePasswords(
      candidatePassword: string,
      hashedPassword: string
    ) {
      return await bcrypt.compare(candidatePassword, hashedPassword);
    }
    generateJwt() {
      return jwt.sign({ id: this.id, definicao: this.definicao }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
  }
