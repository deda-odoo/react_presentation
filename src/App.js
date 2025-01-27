import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return <h1 className="text-2xl font-bold text-center mt-10">Bienvenue sur la page d'accueil</h1>;
}

function About() {
    return <h1 className="text-2xl font-bold text-center mt-10">À propos de nous</h1>;
}

function App() {
    return (
        <Router>
            <nav className="bg-gray-800 text-white p-4">
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link to="/" className="hover:underline">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:underline">À propos</Link>
                    </li>
                </ul>
            </nav>
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
