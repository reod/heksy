export interface Responder {
  noteDeleted(): void;
  noteNotDeleted(error: Object): void;
}
