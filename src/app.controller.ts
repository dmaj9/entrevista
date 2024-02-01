import { Controller, Get,Post, Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ejemplo')
export class AppController {
  constructor(private readonly appService: AppService) {}
   @Post()
    obtenerParametros(@Body() body: any) {
      const { nombre, apellido_p, apellido_m } = body;
    return { nombre, apellido_p, apellido_m };
    }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
}


