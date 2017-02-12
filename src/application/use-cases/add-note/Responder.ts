import { Note } from './../../../modules/note/domain/Note';
import { ValidationError } from './../../../shared-domain/ValidationError';

export interface Responder {
  noteAddedSuccessfully(note: Note): void;
  noteNotAdded(errors: Array<ValidationError>): void;
}