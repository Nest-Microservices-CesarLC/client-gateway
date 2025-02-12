import { IsEnum, IsOptional, IsString } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class StatusOrderDto {
  @IsEnum(OrderStatusList, {
    message: `Valid statuses are ${OrderStatusList}`,
  })
  @IsString()
  status: OrderStatus;
}
