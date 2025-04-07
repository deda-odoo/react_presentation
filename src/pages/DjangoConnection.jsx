import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ArticleApp() {
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Login handler
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/token/', {
                username,
                password,
            });
            setToken(res.data.access);
        } catch (err) {
            alert('Login failed!');
        }
    };

    // Fetch all articles
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/articles/');
                setArticles(res.data);
            } catch (err) {
                console.error('Error fetching articles:', err);
            }
        };
        fetchArticles();
    }, []);

    // Submit new article
    const submitArticle = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                'http://localhost:8000/api/articles/',
                { title: title, content },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setTitle('');
            setContent('');
            // Refetch articles
            const res = await axios.get('http://localhost:8000/api/articles/');
            setArticles(res.data);
        } catch (err) {
            alert('Failed to post article');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {!token ? (
                <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow">
                    <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-full border border-gray-300 p-2 rounded"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </form>
                </div>
            ) : (
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow mb-6">
                        <h2 className="text-xl font-bold mb-4">Post a New Article</h2>
                        <form onSubmit={submitArticle} className="space-y-4">
                            <input
                                className="w-full border border-gray-300 p-2 rounded"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                className="w-full border border-gray-300 p-2 rounded"
                                placeholder="Content"
                                rows={4}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Publish
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className="max-w-3xl mx-auto space-y-4">
                <h2 className="text-2xl font-bold mb-4 text-center">📚 Articles</h2>
                {articles.length === 0 ? (
                    <p className="text-center text-gray-500">No articles yet.</p>
                ) : (
                    articles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white p-4 rounded-xl shadow border border-gray-200"
                        >
                            <h3 className="text-xl font-semibold">{article.titre}</h3>
                            <p className="mt-2 text-gray-700">{article.content}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ArticleApp;
