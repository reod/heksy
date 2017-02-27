import { InMemoryRepository } from './../../../../../../lib/InMemoryRepository';
import { Note } from './../../../domain/Note';
import { NoteRepository } from './../../../domain/NoteRepository';

export class InMemoryNoteRepository 
  extends InMemoryRepository
  implements NoteRepository {
    constructor() {
      super();
    }

    public findByRetroId(retroId: string) {
      return this.findBy({ key: 'retroId', value: retroId });
    }
  }
