import React, {Component} from 'react';
import SignPost from './components/signPost/signPost';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <SignPost></SignPost>
      </div>
    );
  }
}

export default App;
