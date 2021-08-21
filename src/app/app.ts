import feathers from '@feathersjs/feathers';
import {Application} from '@definitions/app';
import services from './services';

const app: Application = feathers();

app.configure(services);

export default app;
