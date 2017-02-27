import { ValidationError } from './../../../shared-domain/ValidationError';
import { DomainModelValidator } from './../../../shared-domain/DomainModelValidator';
import { Note } from './Note';

export class NoteValidator implements DomainModelValidator<Note> {

  private errors: Array<ValidationError> = [];

  public validate(note: Note): boolean {
    if (!this.hasRetroId(note)) {
      this.errors.push({
        field: 'retroId',
        message: `Unknown retroId: ${note.getRetroId()}`
      });
    }

    if (!this.hasCorrectType(note)) {
      this.errors.push({
        field: 'type',
        message: `Unknown note type: ${note.getType()}`
      });
    }

    if (!this.hasContent(note)) {
      this.errors.push({
        field: 'content',
        message: 'Note content is empty.'
      });
    }

    return this.errors.length === 0;
  }

  public getErrors(): Array<ValidationError> {
    return this.errors;
  }

  private hasRetroId(note: Note): boolean {
    const retroId = note.getRetroId();;
    return typeof retroId === 'string' && retroId.length > 0;
  }

  private hasCorrectType(note: Note): boolean {
    const types: Array<string> = ['green', 'yellow', 'red'];
    return types.indexOf(note.getType()) !== -1;
  }

  private hasContent(note: Note): boolean {
    const content = note.getContent();

    if (typeof content !== 'string') {
      return false;
    }
    
    return content.trim().length >= 0;
  }

}
