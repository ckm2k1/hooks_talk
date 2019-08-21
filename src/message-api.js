import * as util from './util';

let messageLoadingInt;

function unsub() {
  clearInterval(messageLoadingInt);
}

const messages = [];

export function getMessages(cb) {
  messageLoadingInt = setTimeout(() => {
    console.log('Refreshing messages...');
    return cb(messages, unsub);
  }, 1000);
}

export function addMessage(msg, cb = () => {}) {
  messages.push(msg);
  setTimeout(() => {
    cb(msg);
  });
}
