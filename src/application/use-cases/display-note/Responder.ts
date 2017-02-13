import { Note } from './../../../modules/note/domain/Note';

export interface Responder {
  noteFound(note: Note): void;
  noteNotFound(): void;
}
