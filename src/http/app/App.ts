import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';

import './controllers/ApiController';
import './controllers/note/ListNotesController';
import './controllers/note/AddNoteController';
import './controllers/note/DeleteNoteController';
import './controllers/note/EditNoteController';
import './controllers/note/DisplayNoteController';

import './controllers/retro/CreateRetroController';
import './controllers/retro/DisplayRetroController';


export class App {
  public server: any;

  constructor() {
    this.server = createKoaServer();
  }

  public listen(port: Number, callback?: Function) {
    return this.server.listen(port, callback);
  }

}