import { Retro } from './../../../modules/retro/domain/retro';
import { RetroRepository } from './../../../modules/retro/domain/RetroRepository';
import { NoteRepository } from './../../../modules/note/domain/NoteRepository';
import { ValidationException } from './../../../shared-domain/ValidationException';
import { Command } from './Command';
import { Responder } from './Responder';


export class UseCase {

  private retroRepository: RetroRepository;
  private noteRepository: NoteRepository;

  constructor(retroReository: RetroRepository, noteRepository: NoteRepository) {
    this.retroRepository = retroReository;
    this.noteRepository = noteRepository;
  }

  async execute(command: Command, responder: Responder) {
    try {
      const retroId = command.getRetroId();
      const retro = await this.retroRepository.findById(retroId);

      if (!retro) {
        throw new Error('Not found.');
      }

      const notes = await this.noteRepository.findByRetroId(retroId);
      retro.setNotes(notes);

      responder.retroSuccessfullyFound(retro);
    } catch (e) {
      console.log(e)
      responder.retroNotFound();
    }
  }

}
