import React from 'react';
import Test from '../components/hello-world';
import '../styles/style.css'

export default class SimplePage {

 getTitle() {
		return (
			"This is a test title"
		)
 }

	getElements() {
		return (
			<Test/>
		);
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'this is a test, powered by React Server'},
			{name: 'generator', content: 'React Server'},
		];
	}
}
