import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
    return (
        <Router>
        <Routes>
            <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
    )
}

export default App