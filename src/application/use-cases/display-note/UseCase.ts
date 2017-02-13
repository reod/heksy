import { NoteRepository } from './../../../modules/note/domain/NoteRepository';
import { Command } from './Command';
import { Responder } from './Responder';


export class UseCase {

  private noteRepository: NoteRepository;

  constructor(noteReository: NoteRepository) {
    this.noteRepository = noteReository;
  }

  async execute(command: Command, responder: Responder) {
    const id = command.getId();

    try {
      const note = await this.noteRepository.findById(id);
      responder.noteFound(note);
    } catch (e) {
      responder.noteNotFound();
    }
  }

}
