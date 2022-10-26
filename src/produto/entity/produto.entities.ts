import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entity/categoria.entities";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tb_produto'})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column ({length:50 ,nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column ({nullable:false, zerofill:true})
    valor: number;

    @IsNotEmpty()
    @Column ({length:50, nullable:false})
    marca: string;

    @IsNotEmpty()
    @Column ({length:50, nullable: false})
    fabricante: string;

    @IsNotEmpty()
    @Column ({nullable: false, zerofill:true})
    qtd_estoque: number;

    @IsNotEmpty()
    @Column ({length:280,nullable:true})
    descricao: string;

    @ManyToOne(() =>Categoria, (categoria) => categoria.produto, {
    onDelete: "CASCADE"
    })
    categoria: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.produto,{
        onDelete: "CASCADE"
    })
    usuario: Usuario;

}