import { InMemoryRepository } from './../../../../../../lib/InMemoryRepository';
import { Note } from './../../../domain/Note';
import { NoteRepository } from './../../../domain/NoteRepository';

export class InMemoryNoteRepository 
  extends InMemoryRepository<Note> 
  implements NoteRepository {
    constructor() {
      console.log('kalled')
      super();
    }

    add(note: Note): number {
      const a = super.add(note);
      console.log('addding', this.getAll());
      return a;
    }
  }
