import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entity/produto.entities";
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: "tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @Column ({length:50})
    descricao: string;

    @OneToMany(() => Produto, (produto) => produto.categoria, )
    produto: Produto [];
}
