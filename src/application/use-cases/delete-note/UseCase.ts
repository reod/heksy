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
      await this.noteRepository.delete(id);
      responder.noteDeleted();
    } catch (e) {
      responder.noteNotDeleted(e);
    }
  }

}
