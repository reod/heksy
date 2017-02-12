import { JsonController, Patch, Body, Param } from 'routing-controllers';
import { ApiController } from './../ApiController';

import { Note } from './../../../../modules/note/domain/Note';

import { UseCase } from './../../../../application/use-cases/edit-note/UseCase';
import { Command } from './../../../../application/use-cases/edit-note/Command';
import { Responder } from './../../../../application/use-cases/edit-note/Responder';


@JsonController()
export class EditNoteController extends ApiController implements Responder {

  public note: Note;

  @Patch('/notes/:id')
  async deleteNote(@Param('id') id: string, @Body() data: any) {
    const params = Object.assign({}, data, { id });
    const addNoteUseCase = this.getEditNoteUseCase();
    const deleteNoteCommand = new Command(params);
    await addNoteUseCase.execute(deleteNoteCommand, this);

    return this.note;
  }

  async noteEdited(note: Note) {
    this.note = note;
  }

  async noteNotEdited(error: Error) {
    throw error;
  }

  private getEditNoteUseCase(): UseCase {
    return this.getUseCase('editeNote');
  }
}
