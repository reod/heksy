import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';

import './controllers/ApiController';
import './controllers/note/ListNotesController';
import './controllers/note/AddNoteController';
import './controllers/note/DeleteNoteController';
import './controllers/note/EditNoteController';
import './controllers/note/DisplayNoteController';

import './controllers/retro/CreateRetroController';


export class App {
  public server: any;

  constructor() {
    this.server = createKoaServer();
  }

  public listen(port: Number, callback?: Function) {
    return this.server.listen(port, callback);
  }

  public connectToMongo(): void {
    let mongoose = require('mongoose');

    const host: string = 'mongo';
    const connectionUri = `mongodb://${host}`;
    const connectionOptions = { promiseLibrary: global.Promise };

    mongoose.Promise = global.Promise;
    mongoose.connect(connectionUri, connectionOptions);
    
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', () => {
      console.log('connected to mongo db.');
    });
  }
}