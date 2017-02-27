import { Note } from './Note';

export interface NoteRepository {
  add(note: Note): Promise<Note>;
  findById(id: string): Promise<Note>;
  findByRetroId(id: string): Promise<Array<Note>>;
  getAll(): Promise<Array<Note>>;
  edit(note: Note): Promise<Note>;
  delete(id: string): Promise<Boolean>; 
}
