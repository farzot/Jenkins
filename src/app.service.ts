import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNumber(): number {
    return 10;
  }
  getHello(): string {
    return 'Hello World! From here you can find all of your contacts in your favorites!';
  }
  getBuy(): string {
    return 'Bye bye Najim';
  }
  getContact(): string {
    return 'Here are all of your contacts';
  }
  getText(): string {
    return 'Text message to Najim for CI/CD ';
  }
}
