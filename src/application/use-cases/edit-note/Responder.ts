import { Note } from './../../../modules/note/domain/Note';
import { ValidationError } from './../../../shared-domain/ValidationError';

export interface Responder {
  noteEdited(note: Note): void;
  noteNotEdited(errors: Array<ValidationError>): void;
}
