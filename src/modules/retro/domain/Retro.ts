import { Note } from './../../../modules/note/domain/Note';


export class Retro {

  private id?: string;
  private notes: Array<Note> = [];

  constructor(id: string) {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }

  public getNotes(): Array<Note> {
    return this.notes;
  }

  public setNotes(notes: Array<Note>): void {
    this.notes = notes;
  }
}
