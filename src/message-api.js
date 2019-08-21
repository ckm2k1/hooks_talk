import * as util from './util';

const messages = [];

export function getMessages(cb) {
  setTimeout(() => {
    cb(messages);
  }, 0);
}

export function addMessage(user, msg, cb = () => {}) {
  messages.push({ user, content: msg, id: util.monotonic() });
  setTimeout(cb);
}
