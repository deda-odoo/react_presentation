import React, { useEffect, useState } from 'react';

function EffectExample() {
    const [title, setTitle] = useState('');

    useEffect(() => {
        getData();
    });

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const task = await response.json();
        setTitle(task.title);
    };

    return <h1>{title}</h1>;
}
export default EffectExample;
