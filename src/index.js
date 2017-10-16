import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import data from './data.json'
import us from './teachers.json'
import readings from './readings.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scatter: true,
      val: 0
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

  wiggle = () => {
    let val = (Math.random() * 2 - 1)*10
    this.setState({
      val: val
    })
  }

  render() {
    return (
      <div className="">
        
        <div className={this.state.scatter ? 'info' : 'info behind'} onMouseLeave={this.wiggle} onMouseEnter={this.wiggle}>
          <h1 className='title'>Super <br/> Mega <br/> Interactive</h1>
          <h3 className='title2'>SVA IxD and COMMS - Fall 2017</h3>

          <p><span className = 'highlight' >We are already superhuman.</span> This course focuses on the skills required to design intelligently and critically for our cyborg reality. Technology is augmenting you nearly every moment of your life. Interaction design is the field that lets you define how that augmentation will happen. We’ll answer questions you’ve always been asking, such as: <br/></p>
          <ul>
            <li>Were stairs always the same height?</li>
            <li>Who decided the sound for an iphone notification & why?</li>
            <li>What would happen if we used a computer with a mouse in BOTH your hands???</li>
            <li>Why is the A next to the S on your keyboard?</li>
            <li>Why do some doors just suck?</li>
          </ul>

          <p className='links'><a href="https://docs.google.com/presentation/d/1Y0XQ2Xcesa27cf3Bo_4w1dwUWtJl1RiwGEBYbU8y6WY/edit">If you're curious, check out our running deck ↝</a></p>

          <h3> Readings </h3>
          <div className="readings">
            {readings.map((data) =>
              <div className='week'>
                <p>{data.week}</p>
                <ul>
                {
                  data.assigned.map((data2) => <li><a target="_blank" href={data2.link}>{data2.title}</a></li>)
                }
                </ul>
              </div>
            )}

          </div>

          <h3>Students</h3>

          <p className='links people' onMouseEnter={this.wiggle} onMouseLeave={this.wiggle} onClick={this.scatter}><a href="" onClick={(e) => e.preventDefault()}>Student Work ↜</a></p>

          <div className="class">
            {data.map((data, index) =>
              <div className='person'
                onClick={(e) => this.linkOut(data.link)}
                // style={this.state.scatter ? {transform: `translate(${(70 - ((Math.random() * 2 - 1)*80)+this.state.val)}vw, ${( 70 -((Math.random() * 2 - 1)*80)+this.state.val)}vh)`} : {opacity: 1}}
                key={index}>
                <img className='image' src={"data/" + data.image} alt="" />
              </div>
            )}
          </div>

          <h3>Taught by:</h3>
            <div className="teach">
            {us.map((data, index) =>
              <div className='person teacher'
                onClick={(e) => this.linkOut(data.link)}
                key={index}>
                <img className='image' src={"data/" + data.image} alt="" />
              </div>
            )}
          </div>
        </div>
        
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
