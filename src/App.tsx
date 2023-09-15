import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import PageRoutes from './pages';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<BrowserRouter>
			<PageRoutes />
			<Toaster />
		</BrowserRouter>
	);
}

export default App;
