var React = require('react');
var ReactDom = require('react-dom');
var BasicComponent = require('./components/BasicComponent.jsx');

ReactDom.render(<BasicComponent color="red" number="0"/>, document.getElementById('comp0'));
ReactDom.render(<BasicComponent color="green" number="1"/>, document.getElementById('comp1'));
ReactDom.render(<BasicComponent color="burlywood" number="2"/>, document.getElementById('comp2'));
