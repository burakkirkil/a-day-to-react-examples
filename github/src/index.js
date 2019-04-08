import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import App from './App';
import AppFunctionAsChild from './AppFunctionAsChild';
import AppHOC from './AppHOC';
import AppRenderProps from './AppRenderProps';
import AppHooks from './AppHooks';

ReactDOM.render(<App />, document.getElementById('app'))
// ReactDOM.render(<AppFunctionAsChild />, document.getElementById('app'))
// ReactDOM.render(<AppHOC />, document.getElementById('app'))
// ReactDOM.render(<AppRenderProps />, document.getElementById('app'))
// ReactDOM.render(<AppHooks />, document.getElementById('app'))
