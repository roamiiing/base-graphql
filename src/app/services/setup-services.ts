import {Application} from '@definitions/app';
import messages from './messages';

export default function setupServices(app: Application) {
  [messages].forEach(app.configure.bind(app));
}
