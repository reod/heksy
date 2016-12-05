import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';

import './controllers/ApiController';
import './controllers/NoteController';

export class App {
  public server: any;

  constructor() {
    this.server = createKoaServer();
  }

  public listen(port: Number, callback?: Function) {
    return this.server.listen(port, callback);
  }
}