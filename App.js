
/*import React, { Component } from 'react'
//import MenuItem from'./MenuItem'
import './App.css';
import D4CE from './D4CE';


class App extends Component {
  render() {
    return (
      <div>
        <center>
    <Navapp></Navapp>
       <Image/>
    <Footer/>
          {/*<MenuItem/>*/}
          {/*<D4CE></D4CE>*/}
        /*</center>
      </div>
    )
  }
}
export default App*/
import './App.css';
import { Component1 } from './Component1';
import Errorboundary from './Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Component1 a={["apple","banana","pinapple","guava"]}/>
      </Errorboundary>
    </div>
  );
}
