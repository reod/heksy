import { Note } from './../../../modules/note/domain/Note';
import { NoteFactory } from './../../../modules/note/domain/NoteFactory';
import { NoteRepository } from './../../../modules/note/domain/NoteRepository';
import { RetroRepository } from './../../../modules/retro/domain/RetroRepository';
import { ValidationException } from './../../../shared-domain/ValidationException';
import { Command } from './Command';
import { Responder } from './Responder';


export class UseCase {

  private noteRepository: NoteRepository;
  private retroRepository: RetroRepository;

  constructor(noteReository: NoteRepository, retroRepository: RetroRepository) {
    this.noteRepository = noteReository;
    this.retroRepository = retroRepository;
  }

  async execute(command: Command, responder: Responder) {
    try {
      const note = command.getNote();
      const retroId = note.getRetroId();

      const noteToAdd = NoteFactory.create(note);
      const repositoryToAdd = await this.retroRepository.findById(retroId);

      if (!repositoryToAdd) {
        throw new Error('Cannot add note to not existing reopsitory.');
      }

      const addedNote = await this.noteRepository.add(noteToAdd);
      responder.noteAddedSuccessfully(addedNote);
    } catch (e) {
      let error;

      if(e instanceof ValidationException) {
        error = e.getErrors();  
      } else {
        error = [e];
      }
  
      responder.noteNotAdded(error);
    }
  }

}
