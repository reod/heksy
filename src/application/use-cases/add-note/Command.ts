import { Note } from './../../../modules/note/domain/Note';

export class Command {
  private note: Note;
  
  public getNote(): Note {
    return this.note;
  }

  public setNote(note: Note): void {
    this.note = note;
  }
}

