import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import PageRoutes from './pages';

function App() {
	return (
		<BrowserRouter>
			<PageRoutes />
		</BrowserRouter>
	);
}

export default App;
