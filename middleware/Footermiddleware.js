import React from 'react';
import Footer from '../components/footer';

export default class Footermiddleware {
	getElements(next) {
		return next().concat(<Footer />);
	}
}
