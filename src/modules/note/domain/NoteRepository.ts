import { Note } from './Note';

export interface NoteRepository {
  add(note: Note): Promise<Note>;
  findById(id: string): Promise<Note>;
  getAll(): Promise<Array<Note>>;
  delete(id: string): Promise<Boolean>; 
}
