import * as mongoose from 'mongoose';
import { INote, Note } from './../../../domain/Note';
import { NoteRepository } from './../../../domain/NoteRepository';

export const NoteSchema: mongoose.Schema = new mongoose.Schema({
  type: { type: String, required: true },
  content: { type: String, required: true },
});

export interface INoteModel extends INote, mongoose.Document {};

export const NoteModel = mongoose.model<INoteModel>('Note', NoteSchema);

export class MongoNoteRepository implements NoteRepository {

  async add(data: Note): Promise<Note> {
    const note = new NoteModel(data);
    return await note.save();
  }

  async findById(id: string): Promise<Note> {
    return await NoteModel.findOne({ id });
  }

  async getAll(): Promise<Array<Note>> {
    const notes = await NoteModel.find({});
    // TODO: why I need to do that?
    const parsedNotes = notes.map(this.parseNote);
    
    return parsedNotes;
  }

  async delete(id: string): Promise<Boolean> {
    const s = await NoteModel.findOneAndRemove({ id });
    return !!s;
  }

  async edit(note: Note): Promise<Note> {
    // TODO
    const { id } = note;
    return Promise.resolve(null);
  }

  parseNote(note: any): Note {
    return {
      id: String(note._id),
      type: note.type,
      content: note.content
    };
  }
}
