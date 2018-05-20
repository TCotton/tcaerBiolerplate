import React, { Component } from 'react';
import ReactClass from 'create-react-class';
import './App.css';

const GreeterMessage = ReactClass({
	render: function () {
		const name = this.props.name;
		const message = this.props.message;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
});

const GreeterForm = ReactClass({
	onFormSubmit: function (e) {
		e.preventDefault();

		const updates = {};
		const name = this.refs.name.value;
		const message = this.refs.message.value;

		if (name.length > 0) {
			this.refs.name.value = '';
			updates.name = name;
		}

		if (message.length > 0) {
			this.refs.message.value = '';
			updates.message = message;
		}

		this.props.onNewData(updates);
	},
	render: function () {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type="text" ref="name" placeholder="Enter name"/>
				</div>
				<div>
					<textarea ref="message" placeholder="Enter message"></textarea>
				</div>
				<div>
					<button>Submit</button>
				</div>
			</form>
		);
	}
});

const Greeter = ReactClass({
	getDefaultProps: function () {
		return {
			name: 'React',
			message: 'This is the default message!'
		};
	},
	getInitialState: function () {
		return {
			name: this.props.name,
			message: this.props.message
		};
	},
	handleNewData: function (updates) {
		this.setState(updates);
	},
	render: function () {
		const name = this.state.name;
		const message = this.state.message;

		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewData={this.handleNewData}/>
			</div>
		);
	}
});

export default Greeter;
