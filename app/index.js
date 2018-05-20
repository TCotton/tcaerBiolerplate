import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const objOne = {
	name: 'Andrew',
	location: 'London'
}

const objTwo = {
	age: 25,
	...objOne
}

console.dir(objTwo);

ReactDOM.render(<h1>Boilerplate app</h1>, document.getElementById('root'));
