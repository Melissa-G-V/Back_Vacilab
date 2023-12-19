import { Pedido } from "../entity/Pedido";
import IPedido from "../interface/IPedido";
import { AppDataSource } from "../../database/data-source";

const pedidoRepository = AppDataSource.getRepository(Pedido)

const getPedido = ():Promise<IPedido[]> => {
    return pedidoRepository.find();
}

const deletePedido = async (id: number): Promise<void> => {
    await pedidoRepository.softDelete(id);
}

const restorePedido = async (id: number): Promise<void> => {
    await pedidoRepository.restore(id);
}

export default { getPedido,deletePedido,restorePedido }