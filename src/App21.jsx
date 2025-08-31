// Lifecycle Methods on Class-based Components

import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("This is componentDidMount. I run after the first render!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "This is componentDidUpdate. I run after any subsequent render!"
    );
  }

  componentWillUnmount() {
    console.log("This is componentWillUnmount. Hey, I'm about to be removed!");
  }

  render() {
    console.log("I'm rendering!");
    const { count } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increase
        </button>
        <button onClick={() => this.setState({ count: count - 1 })}>
          Decrease
        </button>
        <h2>{count}</h2>
      </div>
    );
  }
}

class App21 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { visible } = this.state;
    return (
      <main>
        <div>
          <h1>Hi</h1>
          <button onClick={() => this.setState({ visible: !visible })}>
            Show / Hide the Counter Component
          </button>

          {visible && <Counter />}
        </div>
      </main>
    );
  }
}

export default App21;
