import React from 'react';
import ReactClass from 'create-react-class';

import GreeterMessage from './GreeterMessage';
import GreeterForm from './GreeterForm';

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
