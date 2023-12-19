import { Animal } from "../entity/Animal";
import IAnimal from "../interface/IAnimal";
import { AppDataSource } from "../../database/data-source";

const animalRepository = AppDataSource.getRepository(Animal)

const getAnimais = ():Promise<IAnimal[]> => {
    return animalRepository.find(
        
    );
}

const getWhereAnimais = async (id: number): Promise<IAnimal> => {
    
    let animal = await animalRepository.findOne({
        relations: ['usuario'],
        where: { id } 
    });

    if (!animal) {
        throw new Error('Animal não encontrado');
    }

    return animal;
}


const createAnimais = (animal: IAnimal): Promise<IAnimal> => {
    return animalRepository.save(animal);
}

const updateAnimais = async (id: number, newAnimal: IAnimal): Promise<IAnimal> => {
    let animal = await animalRepository.findOne({ where: { id } });

    if (!animal) {
        throw new Error('Animal não encontrado');
    }

    animal.nome = newAnimal.nome || animal.nome;
    animal.cor = newAnimal.cor || animal.cor;
    animal.raca = newAnimal.raca || animal.raca;
    animal.genero = newAnimal.genero || animal.genero;
    animal.microchip = newAnimal.microchip || animal.microchip;
    animal.castrado = newAnimal.castrado || animal.castrado;
    animal.compartilhado =   newAnimal.compartilhado|| animal.compartilhado;
    // animal.peso = newAnimal.peso || animal.peso;
    animal.data_nascimento = newAnimal.data_nascimento || animal.data_nascimento;

    return await animalRepository.save(animal);
}

const deleteAnimais = async (id: number): Promise<void> => {
    await animalRepository.softDelete(id);
}

const restoreAnimais = async (id: number): Promise<void> => {
    await animalRepository.restore(id);
}
  


const chipadoAnimal = async (id: number, newAnimal: IAnimal): Promise<IAnimal> => {
    let animal = await animalRepository.findOne({ where: { id } });

    if (!animal) {
        throw new Error('Animal não encontrado');
    }
    animal.microchip = !animal.microchip
    return await animalRepository.save(animal);
}

const mortisAnimais = async (id: number, newAnimal: IAnimal): Promise<IAnimal> => {
    let animal = await animalRepository.findOne({ where: { id } });

    if (!animal) {
        throw new Error('Animal não encontrado');
    }
    animal.mortis = !animal.mortis
    return await animalRepository.save(animal);
}




export default { getAnimais,mortisAnimais,createAnimais, getWhereAnimais, updateAnimais, chipadoAnimal, deleteAnimais, restoreAnimais }