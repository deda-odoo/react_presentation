import React, { useState } from 'react';

function Home() {
    const [inputValue, setInputValue] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to the Form</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="input-field" className="block text-gray-700 text-sm font-bold mb-2">
                        Type something
                    </label>
                    <input
                        id="input-field"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </form>
            {submitted && (
                <p className="text-lg text-green-600">
                    Welcome to the form, <strong>{inputValue}</strong>!
                </p>
            )}
        </div>
    );
}

export default Home;
