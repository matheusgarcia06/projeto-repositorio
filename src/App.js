import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Main />} />
					<Route
						exact
						path='/repositorio/:repositorio'
						element={<Repositorio />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
