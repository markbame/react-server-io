import React from 'react';
import Home from '../components/home';
import '../styles/style.css'
import axios from 'axios'
export default class AboutPage {

 getTitle() {
		return (
			"About"
		)
 }
	getElements() {

		return (
			<Home/>
		);
	}
  componentWillMount(){
    console.log('mounting')
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
