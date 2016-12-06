import { ValidationError } from './../../../shared-domain/ValidationError';
import { DomainModelValidator } from './../../../shared-domain/DomainModelValidator';
import { Note } from './Note';

export class NoteValidator implements DomainModelValidator<Note> {

  private errors: Array<ValidationError> = [];

  public validate(note: Note): boolean {
    if (!this.hasCorrectType(note)) {
      this.errors.push({
        field: 'type',
        message: 'unknown note type: ' + note.type
      });
    }

    if (!this.hasContent(note)) {
      this.errors.push({
        field: 'content',
        message: 'Note content is empty'
      });
    }

    return this.errors.length === 0;
  }

  public getErrors(): Array<ValidationError> {
    return this.errors;
  }

  private hasCorrectType(note: Note): boolean {
    const types: Array<string> = ['green', 'yellow', 'red'];
    return types.indexOf(note.type) !== -1;
  }

  private hasContent(note: Note): boolean {
    if (typeof note.content !== 'string') {
      return false;
    }
    
    return note.content.trim().length >= 0;
  }

}
