import { Note } from './../../../modules/note/domain/Note';

export interface IRetro {
  id?: string;
}

export class Retro implements IRetro {

  public id?: string;
  private notes: Array<Note>;

  constructor(id: string, notes: Array<Note>) {
    this.id = id;
    this.notes = [];
  }
}
