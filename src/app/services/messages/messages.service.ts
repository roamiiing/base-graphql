import {ServiceAddons} from '@feathersjs/feathers';
import {getModelForClass} from '@typegoose/typegoose';
import {Message, messagePagination} from '@models';
import {Application} from '@definitions/app';
import Services from '../services';
import MessagesService from './messages.class';
import messagesHooks from './messages.hooks';

declare module '@definitions/app' {
  interface ServiceTypes {
    [Services.Messages]: MessagesService & ServiceAddons<any>;
  }
}

export default function setupMessagesService(app: Application) {
  app.use(
    Services.Messages,
    new MessagesService(
      {
        Model: getModelForClass(Message),
        paginate: messagePagination,
      },
      app
    )
  );

  const messagesService = app.service(Services.Messages);

  messagesService.hooks(messagesHooks);
}
