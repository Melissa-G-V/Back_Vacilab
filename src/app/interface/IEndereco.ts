

interface IEndereco{
    id?: number
    num_casa?:number
    residencia?: string
    bairo?: string
    cep?: string
    localidade?: string
    deletedAt?:Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export default IEndereco