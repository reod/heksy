import { INote } from './../../../modules/note/domain/Note';

export interface Responder {
  notesFound(notes: Array<INote>): void;
}
