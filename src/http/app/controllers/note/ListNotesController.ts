import { JsonController, Get } from 'routing-controllers';
import { ApiController } from './../ApiController';
import { Note } from './../../../../modules/note/domain/Note';
import { UseCase } from './../../../../application/use-cases/list-notes/UseCase';
import { Command } from './../../../../application/use-cases/list-notes/Command';
import { Responder } from './../../../../application/use-cases/list-notes/Responder';


@JsonController()
export class ListNotesController extends ApiController implements Responder {

  private notes: Array<Note> = [];

  @Get('/notes')
  async getAll() {
    const listNotesUseCase = this.getListNotesUseCase();
    await listNotesUseCase.execute(new Command(), this);

    return this.notes;
  }

  notesFound(notes: Array<Note>) {
    this.notes = notes;
  }

  private getListNotesUseCase(): UseCase {
    return this.getUseCase('listNotes');
  }
}

