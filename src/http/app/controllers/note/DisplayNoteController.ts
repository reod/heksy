import { JsonController, Get, Param } from 'routing-controllers';
import { ApiController } from './../ApiController';

import { Note } from './../../../../modules/note/domain/Note';
import { UseCase } from './../../../../application/use-cases/display-note/UseCase';
import { Command } from './../../../../application/use-cases/display-note/Command';
import { Responder } from './../../../../application/use-cases/display-note/Responder';


@JsonController()
export class DisplayNoteController extends ApiController implements Responder {

  public note: Note;

  @Get('/notes/:id')
  async deleteNote(@Param('id') id: string) {
    const displayDealUseCase = this.getDisplayNoteUseCase();
    const displayNoteCommand = new Command(id);
    await displayDealUseCase.execute(displayNoteCommand, this);

    return this.note;
  }

  async noteFound(note: Note) {
    this.note = note;
  }

  async noteNotFound() {
    throw new Error('Note not found.');
  }

  private getDisplayNoteUseCase(): UseCase {
    return this.getUseCase('displayNote');
  }
}
