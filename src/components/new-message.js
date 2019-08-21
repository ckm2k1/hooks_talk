import React, {useState} from 'react';
import * as msgApi from '../message-api';

export default function NewMessage(props) {
  const [message, setMessage] = useState('');

  function handleChange(event) {
    const text = event.target.value;
    setMessage(text);
  }

  function addMessage() {
    msgApi.addMessage(message, () => {
      setMessage('');
    });
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={addMessage}>Send</button>
    </>
  );
}
