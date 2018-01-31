import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Link to="/questions">Start quiz</Link>
      </div>
    );
  }
}

export default MainPage;
