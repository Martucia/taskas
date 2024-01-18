import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateCategoryDto, PatchCategoryDto } from './dto';

@Injectable()
export class CategoryService {
  constructor(private db: DbService) {}

  async createCategory(data: CreateCategoryDto, userId: number) {
    const category = await this.db.category.findFirst({
      where: { name: data.name, ownerId: userId },
    });

    if (category) {
      throw new BadRequestException({ type: 'name-exist' });
    }

    return this.db.category.create({
      data: { ...data, ownerId: userId },
    });
  }

  async removeCategory(id: number, userId: number) {
    return this.db.category.delete({
      where: {
        id,
        ownerId: userId,
      },
    });
  }

  async patchCategory(data: PatchCategoryDto, userId: number) {
    await this.db.category.findFirstOrThrow({
      where: { id: data.id },
    });

    return this.db.category.update({
      where: {
        id: data.id,
        ownerId: userId,
      },
      data,
    });
  }

  async findOne(id: number) {
    return this.db.category.findFirstOrThrow({
      where: { id },
    });
  }

  async findAll(userId: number) {
    return this.db.category.findMany({
      where: { ownerId: userId },
    });
  }
}
