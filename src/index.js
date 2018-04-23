import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';


render(
	<Provider store={store}>
		<div>
			<DevTools />
			<h1>Inicjacja projektu</h1>
		</div>
	</Provider>,	
	document.getElementById('root')
	);