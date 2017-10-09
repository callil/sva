import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable'; // The default

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import data from './data.json'
import us from './teachers.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scatter: true
    }
  }

  scatter = () => {
    console.log('hello');
    this.setState({
      scatter: !this.state.scatter
    })
  }

  linkOut = (link) => {
    window.location.href = link;
  }

  render() {
    return (
      <div className="">
        <div className={this.state.scatter ? 'info' : 'info behind'}>
          <h1 className='title'>Super Mega Interactive</h1>
          <h3 className='title2'>SVA IxD and COMMS - Fall 2017</h3>
          <p className='links'><a href="https://docs.google.com/presentation/d/1Y0XQ2Xcesa27cf3Bo_4w1dwUWtJl1RiwGEBYbU8y6WY/edit">Running Deck ↝</a></p>
          <p className='links people' onClick={this.scatter}><a href="" onClick={(e) => e.preventDefault()}>Student Work ↜</a></p>
          <p>We are already superhuman. This course teaches yaou the skills to use digital & interaction design to intelligently and critically design for our cyborg reality. Technology is augmenting you nearly every moment of your life - interaction design is the field that gives you the tools to define how that augmentation will happen. We’ll answer questions you’ve always been asking such as: </p>
          <ul>
            <li>Were stairs always the same height?</li>
            <li>Who decided the sound for an iphone notification & why?</li>
            <li>What would happen if we used a computer with a mouse in BOTH your hands???</li>
            <li>Why is the A next to the S on your keyboard?</li>
            <li>Why do some doors just suck?</li>
          </ul>
          <p>Check out the links above to see our running deck that includes current and past assignments and reading.</p>
          <div>Teachers:</div>
          <div className="teach">
          {us.map((data, index) =>
            <div className='teachers'
              onClick={(e) => this.linkOut(data.link)}
              key={index}>
              <img className='image' src={"data/" + data.image} alt="" />
            </div>
          )}
          </div>
          <br />
        </div>
        <div className="class">
          <div
            onClick={this.scatter}
            style={this.state.scatter ? {opacity: 0, transform: `translate(${(100 - (Math.random() * 2 - 1)*80)}vw, ${( 100 -(Math.random() * 2 - 1)*80)}vh)`} : {opacity: 1}} className={'x'}>
            ×
          </div>
          {data.map((data, index) =>
            <div className='person'
              onClick={this.state.scatter ? this.scatter : (e) => this.linkOut(data.link)}
              style={this.state.scatter ? {transform: `translate(${(70 - (Math.random() * 2 - 1)*80)}vw, ${( 70 -(Math.random() * 2 - 1)*80)}vh)`} : {opacity: 1}}
              key={index}>
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
