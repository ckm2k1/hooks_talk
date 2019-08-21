import React, { useState, useEffect } from 'react';
import * as util from '../util';
import * as msgApi from '../message-api';

export default function Messages() {
  let [messages, setMessages] = useState([]);

  useEffect(() => {
    msgApi.getMessages(data => {
      setMessages(data);
    });

    return () => {
      console.log('Running Messages useEffect cleanup hook.');
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
