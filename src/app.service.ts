import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPlases() {
    return [{id:1, title: 'каток Медео'}]
  }
}
