import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';


export class App {
  public server: any;

  constructor() {
    this.server = createKoaServer({
      controllers: [__dirname + "/controllers/*/*.ts"]
    });
  }

  public listen(port: Number, callback?: Function) {
    return this.server.listen(port, callback);
  }

}