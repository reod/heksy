import { ValidationError} from './ValidationError';

export interface DomainModelValidator<T> {
  validate(model: T): boolean;
  getErrors(): Array<ValidationError>;
}