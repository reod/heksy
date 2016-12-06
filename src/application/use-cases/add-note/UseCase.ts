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

  execute(command: Command, responder: Responder): void {
    let note: Note = null;

    try {
      note = NoteFactory.create(command.getNote());
      this.noteRepository.add(note);
    } catch (e) {
      console.log(e)
      responder.noteNotAdded(e.getErrors());
    }
    
    responder.noteAddedSuccessfully(note);
  }

}
