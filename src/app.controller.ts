import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('number')
  number(): number {
    return this.appService.getNumber();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('bye')
  byeNajim(): string {
    return this.appService.getHello();
  }
  @Get('contacts')
  getContacts(): string {
    return this.appService.getContact();
  }
  @Get('najim')
  najim(): string {
    return this.appService.getText();
  }
}
