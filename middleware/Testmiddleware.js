import React from 'react';
import Header from '../components/header';

export default class Testmiddleware {
	getElements(next) {
		var elements = [];

		elements.push(
			<Header />
		)

		return elements.concat(next());
	}
}
