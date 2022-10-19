import { HttpException, HttpStatus,Injectable } from "@nestjs/common/";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entity/produto.entities";


@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository <Produto>
    ){}

    async findAll (): Promise <Produto[]> {
        return await this.produtoRepository.find({
            relations:{
                categoria: true
            }
        });
    }

    async findById (id: number): Promise <Produto> {
        let produto = await this.produtoRepository.findOne ({
            where:{
                id
            },
            relations:{
                    categoria: true
                }
        });

        if (!produto)
            throw new HttpException (' Produto não encontrado ', HttpStatus.NOT_FOUND )
            return produto;
    }

    async findByNome (nome:string): Promise <Produto[]> {
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
            relations:{
                categoria: true
            }
        });
    }

    async findByValor (valor:number): Promise <Produto[]> {
        return await this.produtoRepository.find({
            where: {
                valor
            },
            relations:{
                categoria: true
            }
        });
    }

    async findByMarca (marca:string): Promise <Produto[]> {
        return await this.produtoRepository.find({
            where: {
                marca: ILike(`%${marca}%`)
            },
            relations:{
                categoria: true
            }
        });
    }

    async findByFabricante (fabricante:string): Promise <Produto[]> {
        return await this.produtoRepository.find({
            where: {
                fabricante: ILike(`%${fabricante}%`)
            },
            relations:{
                categoria: true
            }
        });
    }

    async findByEstoque (qtd_estoque: number): Promise <Produto[]> {
        return await this.produtoRepository.find({
            where: {
                qtd_estoque
            },
            relations:{
                categoria: true
            }
        });
    }

    async findByDescricao (descricao:string): Promise <Produto[]> {
        return await this.produtoRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations:{
                categoria: true
            }
        });
    }

    async create (produto: Produto): Promise <Produto> {
        return await this.produtoRepository.save(produto);
    }

    async update(produto: Produto): Promise <Produto> {
        let buscaProduto: Produto = await this.findById(produto.id)
    
        if (!buscaProduto || !produto.id)
              throw new HttpException("Produto não encontrado", HttpStatus.NOT_FOUND);
        
        return await this.produtoRepository.save(produto);
    }

    async delete (id: number): Promise <DeleteResult> {
        let buscaProduto = await this.findById(id);

        if(!buscaProduto)
            throw new HttpException(' Produto não encontrado ', HttpStatus.NOT_FOUND);
    
        return await this.produtoRepository.delete(id);
        }
}

/* 
    valor price 
    marca  brand
    fabricante maker
    estoque inventory
    descriçao description
*/   