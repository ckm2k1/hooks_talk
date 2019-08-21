import React, { useState, useEffect } from 'react';
import * as util from '../util';
import * as msgApi from '../message-api';

let messageLoadingInt;

export default function Messages({ initialMessages = [] }) {
  let [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    msgApi.getMessages(data => {
      setMessages(data);
    });

    return () => {
      clearInterval(messageLoadingInt);
    };
  });

  let children = [];
  for (let msg of messages) {
    children.push(
      <li key={msg.id}>
        {msg.user}: {msg.content}
      </li>
    );
  }

  return (
    <>
      <div className="message-list-header">Messages</div>
      <ul className="message-list">{children}</ul>
    </>
  );
}
