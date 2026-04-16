import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCategoriaDto {
    @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
    @MinLength(3, { message: 'A descrição deve ter no mínimo 3 caracteres' })
    descricao!: string; 
}