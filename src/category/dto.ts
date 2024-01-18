import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CategoryDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  iconPath: string;

  @ApiProperty()
  ownerId: number;
}

export class CreateCategoryDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    iconPath: string;
}

export class PatchCategoryDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name?: string;

    @ApiProperty()
    iconPath?: string;
}

export class TaskDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  iconPath: string;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  status: boolean;
}
