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
    console.log('scatter');
    this.setState({
      scatter: !this.state.scatter
    })
  }

  linkOut = (link) => {
    window.location.href = link;
  }

  wiggle = () => {
    let val = Math.random();
    let height = document.getElementById("classHolder").offsetTop;
    console.log(val);
    console.log(document.body.scrollHeight);
    console.log(height);
    this.setState({
      val: val,
      height: height
    })
  }

  render() {
    return (
      <div className="">
        
        <div className="info" onMouseLeave={this.wiggle} onMouseEnter={this.wiggle}>
          <h1 className='title'>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>S</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>u</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>p</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>e</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>r</span>
          <br/>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>M</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>e</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>g</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>a</span>
          <br/> 
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>I</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>n</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>t</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>e</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>r</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>a</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>c</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>t</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>i</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>v</span>
          <span className="letter" onMouseEnter={this.state.scatter ? this.wiggle : null}>e</span>
          </h1>

          <div className="flex-collapse">
            <div>
              <h3 className='title2'>SVA IxD and COMMS - Fall 2017</h3>

              <p><span className = 'highlight' >We are already superhuman.</span> This course focuses on the skills required to design intelligently and critically for our cyborg reality. Technology is augmenting you nearly every moment of your life. Interaction design is the field that lets you define how that augmentation will happen. We’ll answer questions you’ve always been asking, such as: <br/></p>
              <ul>
                <li>Were stairs always the same height?</li>
                <li>Who decided the sound for an iphone notification & why?</li>
                <li>What would happen if we used a computer with a mouse in BOTH your hands???</li>
                <li>Why is the A next to the S on your keyboard?</li>
                <li>Why do some doors just suck?</li>
              </ul>

              <p className='links'><a onMouseEnter={this.state.scatter ? this.wiggle : null} href="https://docs.google.com/presentation/d/1Y0XQ2Xcesa27cf3Bo_4w1dwUWtJl1RiwGEBYbU8y6WY/edit">If you're curious, check out our running deck ↝</a></p>
              <p className='links'><a onMouseEnter={this.state.scatter ? this.wiggle : null} href="https://github.com/callil/sva">Here's this site on Github ↝</a></p>
            </div>
            <div>
              <h3> Readings </h3>
              <div className="readings">
                {readings.map((data) =>
                  <div className='week'>
                    <p>{data.week}</p>
                    <ul>
                    {
                      data.assigned.map((data2) => <li><a onMouseEnter={this.state.scatter ? this.wiggle : null} target="_blank" href={data2.link}>{data2.title}</a></li>)
                    }
                    </ul>

                  </div>
                )}

              </div>
            </div>
            <div className="students">
            {/* <h3>Students</h3> */}

            <p className='links people' onMouseEnter={this.state.scatter ? this.wiggle : null} onClick={this.scatter}><a href="" onClick={(e) => e.preventDefault()}>{this.state.scatter ? "Gather Students!" : "Let Students Roam Free!"}</a></p>

            <div className="class" id= "classHolder">
              {data.map((data, index) =>
                <div className={this.state.scatter ? 'person' : 'person gathered'}
                  // onClick={(e) => this.linkOut(data.link)}
                  onMouseEnter={this.state.scatter ? this.wiggle : null}
                  style={this.state.scatter ? {
                      left: `${((Math.random() * 2 - 1) * 30)}vw`,
                      bottom:  `${Math.random()*document.body.scrollHeight - this.state.height/3}px`,
                      transform: `rotate(${(Math.random() * 2 - 1) * 180}deg)`
                    } 
                    : {
                      left: '0px',
                      bottom: '0px'
                    }}
                  key={index}>
                  <a href={data.link} target="_blank"><img className='image' src={"data/" + data.image} alt="" /></a>
                </div>
              )}
            </div>
            </div>
            <div>
            <h3>Taught by:</h3>
              <div className="teach">
              {us.map((data, index) =>
                <div className='person teacher'
                  // onClick={(e) => this.linkOut(data.link)}
                  key={index}>
                  <a href={data.link} target="_blank"><img className='image' src={"data/" + data.image} alt="" /></a>
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
