import About from 'pages/About';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/projects' element={<Projects />}></Route>
			</Routes>
		</>
	);
}

export default App;
