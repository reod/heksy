import { JsonController, Get } from 'routing-controllers';
import { ApiController } from './ApiController';

@JsonController()
export class UserController extends ApiController {

  @Get('/users')
  getAll() {
    return [1, 2, 3];
  }
}

