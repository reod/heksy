import { JsonController, Get } from 'routing-controllers';

@JsonController()
export class ApiController {

  @Get('/')
  index() {
    return {
      hello: 'world'
    };
  }
}

