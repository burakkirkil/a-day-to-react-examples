import React, { Component } from 'react';
import { render } from 'react-dom';

class Box extends Component {
  shouldComponentUpdate() {
    console.log('scu')
    return this.props.update
  }

  render() {
    return (
      <div
        className="box"
        style={{backgroundColor: this.props.color}}>
        return {`${this.props.update}`}
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      color: 'lightgray',
      tick: 0
    };

    this.colors = [
      'skyblue',
      'lightgreen',
      'wheat',
    ];
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        color: this.colors[this.state.tick % this.colors.length],
        tick: this.state.tick + 1
      })
    }, 1000);
  }

  render() {
    return (
      <div>
        <Box color={this.state.color} update={true}>
          <Box color={this.state.color} update={true}>
            <Box color={this.state.color} update={false}>
              <Box color={this.state.color} update={true}>
                <Box color={this.state.color} update={true}>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
