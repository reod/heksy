import { Note } from './Note';

export interface NoteRepository {
  add(note: Note): number;
  findById(id: number): Note;
  getAll(): Array<Note>;
}