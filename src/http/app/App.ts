import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';

import './controllers/ApiController';
import './controllers/note/ListNotesController';
import './controllers/note/AddNoteController';

export class App {
  public server: any;

  constructor() {
    this.server = createKoaServer();
  }

  public listen(port: Number, callback?: Function) {
    return this.server.listen(port, callback);
  }
}