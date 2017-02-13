import { Note } from './../../../modules/note/domain/Note';

export interface Responder {
  notesFound(notes: Array<Note>): void;
  notesNotFound(): void;
}
