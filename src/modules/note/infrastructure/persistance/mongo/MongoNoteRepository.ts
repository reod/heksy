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
    const parsedNotes = notes.map(this.parseNote);

    // TODO: why I need to?
    return parsedNotes;
  }

  parseNote(note: any): INote {
    return {
      id: String(note._id),
      type: note.type,
      content: note.content
    };
  }
}
