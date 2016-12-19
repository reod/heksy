import { InMemoryRepository } from './../../../../../../lib/InMemoryRepository';
import { Note } from './../../../domain/Note';
import { NoteRepository } from './../../../domain/NoteRepository';

export class InMemoryNoteRepository 
  extends InMemoryRepository<Note> 
  implements NoteRepository {
    constructor() {
      super();
    }
  }
