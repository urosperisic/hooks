import { Component } from "react";

// // import React from "react";

// function Box(props) {
//   return (
//     <div>
//       <h1>{props.text}</h1>
//       <h2>{props.subtitle}</h2>
//     </div>
//   );
// }

// function App11() {
//   return <Box text="Hi, U" subtitle="I love React!" />;
// }

// export default App11;

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: false,
    };
    this.handleActiveChange = this.handleActiveChange.bind(this);
  }

  handleActiveChange() {
    this.setState({ activated: !this.state.activated });
    // this.setState((prevState) => {
    //   return {
    //     activated: !prevState.activated,
    //   };
    // });
  }

  render() {
    // const buttonText = this.state.activated ? "Active" : "Inactive";
    const buttonText = this.state.activated
      ? this.props.activeText
      : this.props.inactiveText;
    return <button onClick={this.handleActiveChange}>{buttonText}</button>;
  }
}

class App11 extends Component {
  render() {
    return (
      <header>
        <Button activeText="ON" inactiveText="OFF" />
      </header>
    );
  }
}

export default App11;
