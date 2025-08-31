// REVIEW: React Context

import React, { createContext } from "react";

const NameContext = createContext();

class App31 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Billy Shakespeare",
    };
  }

  render() {
    return (
      <main>
        <h1>Hi</h1>
        <NameContext.Provider value={this.state.name}>
          <Child />
        </NameContext.Provider>
      </main>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <section className="child">
        <Grandchild />
      </section>
    );
  }
}

class Grandchild extends React.Component {
  render() {
    return (
      <div className="grandchild">
        <Button />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <NameContext.Consumer>
        {(name) => <button>{name}</button>}
      </NameContext.Consumer>
    );
  }
}

// ThemeContext
// LanguageContext
// TimezoneContext

// <ThemeContext.Consumer>
//   { theme => {
//     <LanguageContext.Consumer>
//     {
//       language => {
//         <TimezoneContext.Consumer>
//           {
//             timezone => {
//               return <div style={{ color: theme }}>{language} {timezone}</div>
//             }
//           }
//         </TimezoneContext.Consumer>
//       }
//     }
//     </LanguageContext.Consumer>
//   }

//   }
// </ThemeContext.Consumer>

export default App31;
