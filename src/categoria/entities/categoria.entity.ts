import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity({ name: "tb_categorias" })
export class Categoria {
    @PrimaryGeneratedColumn()
    id!: number; 

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    descricao!: string; 
}