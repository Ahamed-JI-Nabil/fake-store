import React from 'react';
import { useState } from 'react';
const Test = () => {
    const [count, setCount] = useState(0)

    const plus = () => setCount(count + 1)
    const minus = () => setCount(count - 1)
    // const {plus, minus} = props[0];
    return (
        <div>

        </div>
    );
};

export default Test;