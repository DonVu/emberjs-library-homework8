import Controller from '@ember/controller';
import { match, not, empty, and } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',
  message: '',

  headerMessage: 'Comming Soon',

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: empty('message'),
  negateValidMessage: not('isValidMessage'),
  isValidForm: and('isValidEmail', 'negateValidMessage'),
  isDisabled: not('isValidForm'),

  actions: {

    saveInvitation() {
      alert(`Saving of the message with the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
