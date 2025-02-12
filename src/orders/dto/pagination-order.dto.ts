import { Type } from 'class-transformer';
import {
  IsEnum,
  isEnum,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit?: number = 15;

  @IsEnum(OrderStatusList, {
    message: `Valid statuses are ${OrderStatusList}`,
  })
  @IsOptional()
  @IsString()
  status?: OrderStatus;
}
