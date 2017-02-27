import { NoteFactory } from './../../../modules/note/domain/NoteFactory';
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
      const note = NoteFactory.create(data);
      await this.noteRepository.edit(note);

      responder.noteEdited(note);
    } catch (e) {
      console.log(e)
      responder.noteNotEdited(e.getErrors());
    }
  }

}
