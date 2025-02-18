import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, ORDER_SERVICE } from 'src/config';
import { OrdersController } from './orders.controller';
import { TransportModule } from '../transport/transport.module';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [TransportModule],
})
export class OrdersModule {}
