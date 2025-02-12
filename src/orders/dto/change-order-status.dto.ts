import { IsEnum, IsString, IsUUID } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class ChangeOrderStatusDto {
  @IsString()
  @IsUUID(4)
  id: string;

  @IsEnum(OrderStatusList, {
    message: `Valid statuses are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
