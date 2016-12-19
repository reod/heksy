import { JsonController, Post, Body } from 'routing-controllers';
import { ApiController } from './../ApiController';
import { ValidationError } from './../../../../shared-domain/ValidationError';
import { Note } from './../../../../modules/note/domain/Note';
import { UseCase } from './../../../../application/use-cases/add-note/UseCase';
import { Command } from './../../../../application/use-cases/add-note/Command';
import { Responder } from './../../../../application/use-cases/add-note/Responder';


@JsonController()
export class AddNoteController extends ApiController implements Responder {

  private note: Note;

  @Post('/notes')
  async addNote(@Body() note: Note) {
    const addNoteUseCase = this.getAddNotestNotesUseCase();
    const addNoteCommand = new Command(note);
    await addNoteUseCase.execute(addNoteCommand, this);

    return this.note;
  }

  noteAddedSuccessfully(note: Note) {
    this.note = note;
  }

  noteNotAdded(errors: Array<ValidationError>) {
    const e = <any> new Error('ValidationError');
    e.errors = errors;

    throw e;
  }

  private getAddNotestNotesUseCase(): UseCase {
    return this.getUseCase('addNote');
  }
}

