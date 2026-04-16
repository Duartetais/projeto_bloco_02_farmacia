import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './entities/categoria.entity';


@Controller("/categorias")
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.categoriaService.findById(id);
  }

  @Get('/descricao/:descricao')
  findByDescricao(@Param('descricao') descricao: string) {
    return this.categoriaService.findByDescricao(descricao);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria) {
    return this.categoriaService.create(categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() categoria: Categoria) {
    return this.categoriaService.update(categoria);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: number) {
    return this.categoriaService.delete(id);
  }
}