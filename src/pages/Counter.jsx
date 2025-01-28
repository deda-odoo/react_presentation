import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-bold mb-6">Beautiful Clicker</h1>
            <div className="space-x-4">
                <button
                    onClick={decrement}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"
                >
                    -
                </button>
                <span className="text-2xl font-semibold text-gray-800">{count}</span>
                <button
                    onClick={increment}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Counter;

