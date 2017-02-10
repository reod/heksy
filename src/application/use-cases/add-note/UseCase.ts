import { Note } from './../../../modules/note/domain/Note';
import { NoteFactory } from './../../../modules/note/domain/NoteFactory';
import { NoteRepository } from './../../../modules/note/domain/NoteRepository';
import { ValidationException } from './../../../shared-domain/ValidationException';
import { Command } from './Command';
import { Responder } from './Responder';


export class UseCase {

  private noteRepository: NoteRepository;

  constructor(noteReository: NoteRepository) {
    this.noteRepository = noteReository;
  }

  async execute(command: Command, responder: Responder) {
    try {
      const note = NoteFactory.create(command.getNote());
      const addedNote = await this.noteRepository.add(note);
      responder.noteAddedSuccessfully(addedNote);
    } catch (e) {
      responder.noteNotAdded(e.getErrors());
    }
  }

}
