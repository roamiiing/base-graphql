import 'reflect-metadata';

import {setupServer} from '@server';
import mongoose from 'mongoose';
import {MONGODB_CONNECTION_STRING} from '@env';

(async () => {
  await mongoose.connect(MONGODB_CONNECTION_STRING!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Mongodb connected');

  await setupServer();
})();
