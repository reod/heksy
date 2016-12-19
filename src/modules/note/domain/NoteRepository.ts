import { INote } from './Note';

export interface NoteRepository {
  add(note: INote): Promise<INote>;
  findById(id: string): Promise<INote>;
  getAll(): Promise<Array<INote>>;
}
