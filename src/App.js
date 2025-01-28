import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import MediaPage from './pages/MediaPage';
import EffectExample from './pages/EffectExample';

function App() {
    return (
        <Router>
            <nav className="bg-gray-800 text-white p-4">
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link to="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/counter" className="hover:font-bold">Counter</Link>
                    </li>
                    <li>
                        <Link to="/media" className="hover:font-bold">Media</Link>
                    </li>
                    <li>
                        <Link to="/effect" className="hover:font-bold">Effect</Link>
                    </li>
                </ul>
            </nav>
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/media" element={<MediaPage />} />
                    <Route path="/effect" element={<EffectExample />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
