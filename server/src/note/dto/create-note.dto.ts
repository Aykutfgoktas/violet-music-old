/**
 * * Header: Comes from client.
 * * Body: Comes from client.
 * * User: Comes from JWT payload that is attached to the request.
 * * Bestpart: Comes from client.
 * * Song: Comes from client.
 *
 */
export class CreateNoteDto {
  readonly header: string;
  readonly body: string;
  readonly user: { userId: string; nickname: string };
  readonly bestPart: { minutes: number; seconds: number };
  readonly song: string;
}
