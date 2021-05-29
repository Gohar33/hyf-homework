import React, { useState, useEffect } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);



    useEffect(() => {
        const timerId = setTimeout(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => clearTimeout(timerId)
    });



    return (
        <div className="count-text">
            You have used {count} seconds on this website

        </div>
    );
}

