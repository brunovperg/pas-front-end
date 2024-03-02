import About from 'pages/About';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/projects' element={<About />}></Route>
			</Routes>
		</>
	);
}

export default App;
