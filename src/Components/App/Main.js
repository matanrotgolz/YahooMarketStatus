import './App.css';
import React from 'react';
import AccountBox from '../accountBox/index.jsx'
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
         <AccountBox/>
        </header>
      </div>
    );
  }
  }


export default Main;
