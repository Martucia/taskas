import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class AccountDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  ownerId: number;
}

export class CreateAccountDto {
  @ApiProperty()
  @IsNotEmpty()
  userName: string;

  @ApiProperty()
  ownerId: number;
}

export class PatchAccountDto {
  @ApiProperty()
  @IsOptional()
  userName: string;
}
