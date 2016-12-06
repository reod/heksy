import { Note } from './../../../modules/note/domain/Note';

export interface Responder {
  noteAddedSuccessfully(note: Note): void;
  noteNotAdded(errors: Object): void;
}