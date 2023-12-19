import { Entity, JoinTable, ManyToMany, ManyToOne,JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Vacina } from "./Vacina";
import { Animal } from "./Animal";

@Entity()
export class Carteira_Animal_Vacinas {
  @PrimaryGeneratedColumn()
  id: number;

    @ManyToOne(() => Animal, (animal) => animal.carteira_Animal_Vacinas)
    public animal: Animal

    @ManyToOne(() => Vacina, (vacina) => vacina.carteira_Animal_Vacinas)
    public vacina: Vacina

    
}


// @Entity()
// export class Carteira {

//     @PrimaryGeneratedColumn()
//     id: number

//     @Column({unique:true}) 
//     @Generated("uuid")
//     codigo: string;

//     @Column()
//     bg_img: string

//     @DeleteDateColumn()
//     deletedAt?: Date;


//     @CreateDateColumn()
//     createdAt: Date;

//     @UpdateDateColumn()
//     updatedAt: Date;

//     @OneToMany(() => Vacina, (vacina) => vacina.carteira)
//     vacinas: Vacina[]
    
// }
