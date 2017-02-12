import { JsonController, Patch, Body, Param } from 'routing-controllers';
import { ApiController } from './../ApiController';

import { Note } from './../../../../modules/note/domain/Note';
import { ValidationError } from './../../../../shared-domain/ValidationError';

import { UseCase } from './../../../../application/use-cases/edit-note/UseCase';
import { Command } from './../../../../application/use-cases/edit-note/Command';
import { Responder } from './../../../../application/use-cases/edit-note/Responder';


@JsonController()
export class EditNoteController extends ApiController implements Responder {

  public note: Note;

  @Patch('/notes/:id')
  async deleteNote(@Param('id') id: string, @Body() data: any) {
    const note = Object.assign({}, data, { id });
    const editNoteUseCase = this.getEditNoteUseCase();
    const editNoteCommand = new Command(note);
    await editNoteUseCase.execute(editNoteCommand, this);

    return this.note;
  }

  async noteEdited(note: Note) {
    this.note = note;
  }

  async noteNotEdited(errors: Array<ValidationError>) {
    const e = <any> new Error('ValidationError');
    e.errors = errors;

    throw e;
  }

  private getEditNoteUseCase(): UseCase {
    return this.getUseCase('editeNote');
  }
}
