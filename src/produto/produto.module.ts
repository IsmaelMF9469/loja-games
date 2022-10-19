import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoController } from "./controllers/produto.controller";
import { Produto } from "./entity/produto.entities";
import { ProdutoService } from "./services/produto.services";


@Module({
    imports: [ TypeOrmModule.forFeature ([Produto])],
    providers: [ ProdutoService ],
    controllers: [ ProdutoController ],
    exports: [ TypeOrmModule ]
})

export class ProdutoModule{}