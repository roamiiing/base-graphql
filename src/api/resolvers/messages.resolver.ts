import {GqlResolver, GqlQuery, GqlMutation, GqlArg} from '@named/type-graphql';
import app, {Services} from '@app';
import {
  PaginatedMessagesResponse,
  PaginatedMessagesInput,
  CreateMessageInput,
  Message,
} from '@models';
import {paginatedArgsToQuery} from '@utils/pagination';

@GqlResolver()
export default class MessagesResolver {
  private messagesService = app.services[Services.Messages];

  @GqlQuery(() => PaginatedMessagesResponse)
  messages(
    @GqlArg('pagination') input: PaginatedMessagesInput
  ): Promise<PaginatedMessagesResponse> {
    return this.messagesService.find({
      query: paginatedArgsToQuery(input),
    });
  }

  @GqlMutation(() => Message)
  createMessage(@GqlArg('message') message: CreateMessageInput): Promise<Message> {
    return this.messagesService.create(message);
  }
}
