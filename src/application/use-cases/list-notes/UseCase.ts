import { Note } from './../../../modules/note/domain/Note';
import { NoteRepository } from './../../../modules/note/domain/NoteRepository';
import { Command } from './Command';
import { Responder } from './Responder';


export class UseCase {

  private noteRepository: NoteRepository;

  constructor(noteReository: NoteRepository) {
    this.noteRepository = noteReository;
  }

  execute(command: Command, responder: Responder): void {
    const notes = this.noteRepository.getAll();
    responder.notesFound(notes);
  }

  public populateWithFakeData() {
    this.noteRepository.add(new Note('red'));
    this.noteRepository.add(new Note('yellow'));
    this.noteRepository.add(new Note('green'));
  }

}
