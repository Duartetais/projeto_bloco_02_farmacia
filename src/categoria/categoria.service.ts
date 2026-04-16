import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';


@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
  return this.categoriaRepository.find();
}

async findById(id: number): Promise<Categoria> {
  const categoria = await this.categoriaRepository.findOne({
    where: { id }
  });

  if (!categoria) {
    throw new Error("Categoria não encontrada");
  }

  return categoria;
}

async findByDescricao(descricao: string): Promise<Categoria[]> {
  return this.categoriaRepository.find({
    where: {
      descricao: ILike(`%${descricao}%`)
    }
  });
}

async create(categoria: Categoria): Promise<Categoria> {
  return this.categoriaRepository.save(categoria);
}

async update(categoria: Categoria): Promise<Categoria> {
  return this.categoriaRepository.save(categoria);
}

async delete(id: number) {
  await this.categoriaRepository.delete(id);
  return {
    message: "Categoria deletada com sucesso"
  };
}
}