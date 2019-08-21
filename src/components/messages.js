import React, { useState, useEffect } from 'react';
import * as util from '../util';
import * as msgApi from '../message-api';

export default function Messages() {
  let [messages, setMessages] = useState([]);

  useEffect(() => {
    function refreshMessages() {
      msgApi.getMessages(data => {
        setMessages(data);
        setTimeout(refreshMessages, 2000);
      });
    }

    refreshMessages();

    return () => {
      console.log('Running Messages useEffect cleanup hook.');
      // clearInterval(interval);
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
