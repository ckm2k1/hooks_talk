import React, { useState } from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    if (props.handleClick) {
      this.handleClick = props.handleClick;
    }
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button className="generic-button" onClick={this.handleClick}>
        Click count: {this.state.count}
      </button>
    );
  }
}

export function HookButton() {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(++count);
  };

  return (
    <button className="generic-button" onClick={handleClick}>
      Click count: {count}
    </button>
  );
}

function getFormattedTime(date) {
  return date
    .toISOString()
    .replace('T', ' ')
    .replace('Z', '');
}

export function MultiHookButton() {
  let [count, setCount] = useState(0);
  let [when, setWhen] = useState(null);

  const handleClick = () => {
    setCount(++count);
    setWhen(new Date());
  };

  return (
    <>
      <div>
        Last updated: {(when && getFormattedTime(when)) || 'Not updated'}
      </div>
      <button className="generic-button" onClick={handleClick}>
        Click count: {count}
      </button>
    </>
  );
}
