import React, {useState, useEffect} from 'react';
import * as msgApi from '../message-api';

export default function NewMessage(props) {
  const [message, setMessage] = useState('');

  useEffect(() => {
     return () => {
       console.log('running NewMessage useEffect cleanup');
     }
  });

  function handleChange(event) {
    const text = event.target.value;
    setMessage(text);
  }

  function addMessage() {
    msgApi.addMessage(props.user, message, () => {
      setMessage('');
    });
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={message} />
      <button onClick={addMessage}>Send</button>
    </>
  );
}
