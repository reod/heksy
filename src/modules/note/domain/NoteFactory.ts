import { ValidationException } from './../../../shared-domain/ValidationException';
import { NoteValidator } from './../../../modules/note/domain/NoteValidator';
import { Note } from './../../../modules/note/domain/Note';

export class NoteFactory {
  private note: NoteValidator;
  
  public static create(data: any): Note {
    const { id, type, content } = data;
    const noteValidator = new NoteValidator();
    const note = new Note(id, type, content);

    if (!noteValidator.validate(note)) {
      const errors = noteValidator.getErrors();
      throw new ValidationException(errors);
    }

    return note;
  }
}
