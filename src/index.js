import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import data from './data.json'

class App extends Component {


  render() {
    return (
      <div className="">
        <h1 className='title'>Super Mega Interactive</h1>
        <div className="class">
          {data.map((data, index) =>
            <div className='person' key={index}>
              {/* <h1 className='name'>{data.name}</h1> */}
              <img className='image' src={"data/" + data.image} alt="" />
            </div>
          )}
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
