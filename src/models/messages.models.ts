import {GqlField, GqlInput, GqlObject, GqlString} from '@named/type-graphql';
import {TgProperty} from '@named/typegoose';
import {ObjectId} from '@named/mongoose';
import {PaginatedInput, PaginatedResponse} from 'utils/pagination';
import {PaginationOptions} from '@feathersjs/feathers';

export const messagePagination: PaginationOptions = {
  default: 10,
  max: 25,
};

@GqlObject()
export class Message {
  @GqlField(() => GqlString)
  readonly _id!: ObjectId;

  @TgProperty({required: true})
  @GqlField(() => GqlString)
  text!: string;
}

@GqlObject()
export class PaginatedMessagesResponse extends PaginatedResponse(Message) {}

@GqlInput()
export class PaginatedMessagesInput extends PaginatedInput({
  pagination: messagePagination,
}) {}

@GqlInput()
export class CreateMessageInput implements Partial<Message> {
  @GqlField(() => GqlString)
  text!: string;
}
