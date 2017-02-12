import { NoteRepository } from './../../../modules/note/domain/NoteRepository';
import { Command } from './Command';
import { Responder } from './Responder';


export class UseCase {

  private noteRepository: NoteRepository;

  constructor(noteReository: NoteRepository) {
    this.noteRepository = noteReository;
  }

  async execute(command: Command, responder: Responder) {
    const data = command.getData();

    try {
      const note = await this.noteRepository.edit(data);
      responder.noteEdited(note);
    } catch (e) {
      responder.noteNotEdited(e);
    }
  }

}
