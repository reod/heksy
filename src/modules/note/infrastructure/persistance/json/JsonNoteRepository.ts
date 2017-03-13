import { JsonRepository } from './../../../../../../lib/JsonRepository';
import { Note } from './../../../domain/Note';
import { NoteFactory } from './../../../domain/NoteFactory';
import { NoteRepository } from './../../../domain/NoteRepository';

export class JsonNoteRepository 
    extends JsonRepository<Note>
    implements NoteRepository {
  
  constructor() {
    super('./storage/Note.json', NoteFactory);
  }

  public findByRetroId(retroId: string) {
    return this.findBy({ key: 'retroId', value: retroId });
  }
}