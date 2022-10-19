import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaController } from "./controllers/categoria.controller";
import { Categoria } from "./entity/categoria.entities";
import { CategoriaServices } from "./services/categoria.services";


@Module({
    imports: [ TypeOrmModule.forFeature([Categoria])],
    providers:[ CategoriaServices ],
    controllers: [ CategoriaController ],
    exports: [TypeOrmModule]
})

export class CategoriaModule{}