import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common/decorators";
import { ProdutoService } from "../services/produto.services";
import { Produto } from "../entity/produto.entities";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { HttpStatus } from "@nestjs/common";


@Controller('/produtos')
export class ProdutoController {
    constructor (private readonly ProdutoServices: ProdutoService ) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise <Produto[]> {
        return this.ProdutoServices.findAll();
    }

    @Get('/:id')
    @HttpCode( HttpStatus.OK )
    findById (
        @Param ('id',ParseIntPipe)
        id: number
    ): Promise <Produto> {
        return this.ProdutoServices.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
        finByNome(
            @Param ('nome')
            nome: string
        ): Promise <Produto[]> {
            return this.ProdutoServices.findByNome(nome)
        }

        @Get('/valor/:valor')
        @HttpCode( HttpStatus.OK )
        findByValor (
            @Param ('valor',ParseIntPipe)
            valor: number
        ): Promise <Produto[]> {
            return this.ProdutoServices.findByValor(valor)
        }

        @Get('/marca/:marca')
        @HttpCode( HttpStatus.OK )
        findByMarca (
            @Param ('marca',ParseIntPipe)
            marca: string
        ): Promise <Produto[]> {
            return this.ProdutoServices.findByMarca(marca)
        }

        @Get('/fabricante/:fabricante')
        @HttpCode( HttpStatus.OK )
        findByFabricante (
            @Param ('fabricante',ParseIntPipe)
            fabricante: string
        ): Promise <Produto[]> {
            return this.ProdutoServices.findByFabricante(fabricante)
        }

        @Get('/estoque/:estoque')
        @HttpCode( HttpStatus.OK )
        findByEstoque (
            @Param ('estoque',ParseIntPipe)
            estoque: number
        ): Promise <Produto[]> {
            return this.ProdutoServices.findByEstoque(estoque)
        }

        @Get('/descricao/:descricao')
        @HttpCode( HttpStatus.OK )
        findByDescricao (
            @Param ('descricao',ParseIntPipe)
            descricao: string
        ): Promise <Produto[]> {
            return this.ProdutoServices.findByDescricao(descricao)
        }

        @Post()
        @HttpCode(HttpStatus.CREATED)
        create (
            @Body()
            produto: Produto
        ): Promise <Produto> {
            return this.ProdutoServices.create(produto);
        }

        @Put()
        @HttpCode(HttpStatus.OK)
        update (
            @Body()
            produto: Produto
        ): Promise <Produto> {
            return this.ProdutoServices.update(produto);
        }

        @Delete ('/:id')
        @HttpCode(HttpStatus.NO_CONTENT)
        delete (
            @Param('id', ParseIntPipe)
            id: number
        ){
            return this.ProdutoServices.delete(id);
        }
}