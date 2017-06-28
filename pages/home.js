import React from 'react';
import Home from '../components/home';
import '../styles/style.css'
import axios from 'axios'

export default class HomePage {

 getTitle() {
		return (
			"Home"
		)
 }
	getElements() {
    var data = {};
    new Promise((resolve) => {
      const request = axios.get('http://api.tvmaze.com/search/shows?q=girls').then(res => {
        data = {shows : res.data}
        //console.log(res.data)
        resolve()
      }).catch(function(error) {
        //console.log(error)
      })
    })

		return (
			<Home/>
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
