import { Note } from './../../../modules/note/domain/Note';

export class Command {

  private note: Note;

  constructor(note: Note) {
    this.note = note;
  }

  public getNote(): Note {
    return this.note;
  }
}
