import { InMemoryRepository } from './../../../../../../lib/InMemoryRepository';
import { INote } from './../../../domain/Note';
import { NoteRepository } from './../../../domain/NoteRepository';

export class InMemoryNoteRepository 
  extends InMemoryRepository<INote> 
  implements NoteRepository {
    constructor() {
      super();
    }
  }
