import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsuarioTable implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE usuario (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                telefone VARCHAR(255) NOT NULL,
                cpf VARCHAR(255) NOT NULL UNIQUE,
                senha VARCHAR(255) NOT NULL,
                nova_senha VARCHAR(255) NOT NULL,
                deleted BOOLEAN NOT NULL DEFAULT false,
                definicao ENUM('admin', 'user', 'validator') NOT NULL
            )
        `);

        await queryRunner.query(`
            CREATE TABLE endereco (
                id SERIAL PRIMARY KEY,
                // Define the columns for the endereco table here
            )
        `);

        await queryRunner.query(`
            CREATE TABLE animal (
                id SERIAL PRIMARY KEY,
                // Define the columns for the animal table here
            )
        `);

        await queryRunner.query(`
            ALTER TABLE usuario
            ADD CONSTRAINT FK_usuario_endereco
            FOREIGN KEY (endereco_id) REFERENCES endereco(id)
        `);

        await queryRunner.query(`
            ALTER TABLE animal
            ADD CONSTRAINT FK_animal_usuario
            FOREIGN KEY (usuario_id) REFERENCES usuario(id)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE animal
            DROP CONSTRAINT FK_animal_usuario
        `);

        await queryRunner.query(`
            ALTER TABLE usuario
            DROP CONSTRAINT FK_usuario_endereco
        `);

        await queryRunner.query(`
            DROP TABLE animal
        `);

        await queryRunner.query(`
            DROP TABLE endereco
        `);

        await queryRunner.query(`
            DROP TABLE usuario
        `);
    }
}
