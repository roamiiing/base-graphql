import {Service, MongooseServiceOptions} from 'feathers-mongoose';
import {Message} from '@models';
import {Paginated, Params} from '@feathersjs/feathers';
import {Application} from '@definitions/app';

export default class MessagesService extends Service<Message> {
  private readonly app: Application;

  constructor(options: Partial<MongooseServiceOptions>, app: Application) {
    super(options);
    this.app = app;
  }

  find(params?: Params): Promise<Paginated<Message>> {
    return super.find(params) as Promise<Paginated<Message>>;
  }

  create(data: Partial<Message>, params?: Params): Promise<Message> {
    return super.create(data, params) as Promise<Message>;
  }
}
