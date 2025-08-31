import { useState } from "react";

// class App12 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     // this.setState({ count: this.state.count + 1 });
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   }

//   render() {
//     return (
//       <header>
//         <button onClick={this.handleClick}>Increase</button>
//         <h1>{this.state.count}</h1>
//       </header>
//     );
//   }
// }

function App12() {
  const [count, setCount] = useState(0);

  // const handleIncrease = () => setCount(count + 1);
  const handleIncrease = () =>
    setCount((prevCount) => {
      return prevCount + 1;
    });

  const handleDecrease = () =>
    setCount((prevCount) => {
      return prevCount - 1;
    });

  const handleReset = () =>
    setCount(() => {
      return 0;
    });

  return (
    <header>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrese</button>
      <button onClick={handleReset}>Reset</button>
      <h1>{count}</h1>
    </header>
  );
}

export default App12;
