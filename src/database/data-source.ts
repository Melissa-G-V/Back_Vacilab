import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "../app/entity/Usuario"
import { Veterinario } from "../app/entity/Veterinario"
import { Animal } from "../app/entity/Animal"
import { Vacina } from "../app/entity/Vacina"
import { Pedido } from "../app/entity/Pedido"
import { Carteira_Animal_Vacinas } from "../app/entity/Carteira"
import { Endereco } from "../app/entity/Endereco"
import { Peso } from "../app/entity/Peso"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "vacilab",
    synchronize: true,
    logging: false,
    entities: [Usuario,Animal,Vacina,Carteira_Animal_Vacinas,Pedido,Veterinario,Endereco],
    migrations: [],
    subscribers: [],
})

// const DataSourceGeo = new DataSource({
//     type: "mongodb",
//     host: "localhost",
//     port: 5432,
//     username: "root",
//     password: "admin",
//     database: "test",
//     entities: [],
//     synchronize: true,
//     logging: false,
// })


// export const DataSourceAuth = new DataSource({
//     type: "mongodb",
//     host: "localhost",
//     port: 27017,
//     database: "vacilab",
//     entities: [ Peso],
//     synchronize: true,
//     logging: true,
// })
