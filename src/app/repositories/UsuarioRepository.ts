import { Usuario } from "../entity/Usuario";
import IUsuario from "../interface/IUsuario";
import { AppDataSource } from "../../database/data-source";
import { Animal } from "../entity/Animal";
import * as bcrypt from 'bcrypt';

const usuarioRepository = AppDataSource.getRepository(Usuario)

const getUsuarios = ():Promise<IUsuario[]> => {
    return usuarioRepository.find({
        select: ['email', 'nome', 'telefone', 'senha']
    });
}

const getWhereUsuarios = async (id: number): Promise<IUsuario> => {
    
    let usuario = await usuarioRepository.createQueryBuilder("usuario")
    .leftJoinAndSelect("usuario.animais", "animais")
    .leftJoinAndSelect("usuario.endereco", "endereco")
    .select(['usuario.email', 'usuario.nome', 'animais.nome', 'animais.raca', 'endereco.localidade','endereco.num_casa','endereco.residencia','endereco.bairo', 'endereco.cep'])
    .where("usuario.id = :id", { id })
    .getOne();

    if (!usuario) {
        throw new Error('Usuario não encontrado');
    }

    return usuario;
}


const createUsuario = async (usuario: IUsuario): Promise<IUsuario> => {
    if (usuario.senha) {
        const saltRounds = 10;
        // usuario.nova_senha = await bcrypt.hash(usuario.nova_senha, saltRounds);
        usuario.senha = await bcrypt.hash(usuario.senha, saltRounds);
    }
    return usuarioRepository.save(usuario);
}

const updateUsuario = async (id: number, newUsuario: IUsuario): Promise<IUsuario> => {
    let usuario = await usuarioRepository.findOne({ where: { id } });

    if (!usuario) {
        throw new Error('Usuario não encontrado');
    }

    usuario.nome = newUsuario.nome || usuario.nome;
    usuario.email = newUsuario.email || usuario.email;
    usuario.telefone = newUsuario.telefone || usuario.telefone;

    return await usuarioRepository.save(usuario);
}

const updateSenhaUsuario = async (id: number, newUsuario: IUsuario): Promise<IUsuario> => {
    let usuario = await usuarioRepository.findOne({ where: { id } });

    if (!usuario) {
        throw new Error('Usuario não encontrado');
    }
    if (usuario.senha) {
        const saltRounds = 10;
        usuario.senha = await bcrypt.hash(usuario.senha, saltRounds);
        // usuario.nova_senha = usuario.senha

    }
    return await usuarioRepository.save(usuario);
}
const findname = async (nome: string): Promise<any> => {
    return await usuarioRepository.findOneOrFail({ where: { nome } });
 }
 
const AutentificarUsuario = async (email: string, senha: string): Promise<IUsuario | null> => {
    const usuario = await usuarioRepository.findOne({ where: { email } });
 
    if (!usuario) {
        return null;
    }
 
    const isMatch = await bcrypt.compare(senha, usuario.senha);
 
    if (!isMatch) {
        return null;
    }
 
    return usuario;
 }

 const deleteUsuario = async (id: number): Promise<void> => {
    await usuarioRepository.softDelete(id);
}

const restoreUsuario = async (id: number): Promise<void> => {
    await usuarioRepository.restore(id);
}




export default { getUsuarios,findname,restoreUsuario,AutentificarUsuario, createUsuario, updateUsuario, deleteUsuario, updateSenhaUsuario,getWhereUsuarios  }

